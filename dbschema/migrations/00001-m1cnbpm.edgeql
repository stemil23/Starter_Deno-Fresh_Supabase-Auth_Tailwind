CREATE MIGRATION m1cnbpmj6qfbgjauydve4dckvhge54nxnbz5xssxywxxgnflayz77q
    ONTO initial
{
  CREATE EXTENSION pgvector VERSION '0.5';
  CREATE EXTENSION edgeql_http VERSION '1.0';
  CREATE EXTENSION ai VERSION '1.0';
  CREATE TYPE default::Movie {
      CREATE REQUIRED PROPERTY title: std::str;
      CREATE PROPERTY slug := (.title);
  };
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Movie {
      CREATE MULTI LINK actors: default::Person;
  };
  ALTER TYPE default::Person {
      CREATE MULTI LINK acted_in := (.<actors[IS default::Movie]);
  };
  CREATE TYPE default::MovieWithActorsTxt {
      CREATE PROPERTY actors: std::str;
      CREATE PROPERTY title: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE DEFERRED INDEX ext::ai::index(embedding_model := 'mistral-embed') ON (((.title ++ ' ') ++ .actors));
  };
  ALTER TYPE default::Movie {
      CREATE TRIGGER mwa_insert
          AFTER INSERT 
          FOR EACH DO (INSERT
              default::MovieWithActorsTxt
              {
                  title := __new__.title,
                  actors := (SELECT
                      std::array_join(std::array_agg((SELECT
                          __new__.actors.name
                      )), ', ')
                  )
              });
      CREATE TRIGGER mwa_delete
          AFTER DELETE 
          FOR EACH DO (DELETE
              default::MovieWithActorsTxt
          FILTER
              (.title = __old__.title)
          );
  };
};
