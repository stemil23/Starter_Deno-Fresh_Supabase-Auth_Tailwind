CREATE MIGRATION m1zpvlz3y4cku5cgr7yivlba62puq5x5nrkspjbfhgbjscelwcqvoq
    ONTO m1cnbpmj6qfbgjauydve4dckvhge54nxnbz5xssxywxxgnflayz77q
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY slug {
          SET default := (std::str_lower(std::str_replace(std::str_replace(.title, r'[^\w\s-]', ''), r'\s+', '-')));
          RESET EXPRESSION;
          RESET CARDINALITY;
          RESET OPTIONALITY;
          SET TYPE std::str;
      };
  };
};
