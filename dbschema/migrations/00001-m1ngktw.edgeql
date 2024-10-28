CREATE MIGRATION m1ngktwjdmczjwtacx4rgpf3tamwl23fxkloyekqrwj7tgyenozwfq
    ONTO initial
{
  CREATE EXTENSION edgeql_http VERSION '1.0';
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY name: std::str;
  };
  CREATE TYPE default::Movie {
      CREATE MULTI LINK actors: default::Person;
      CREATE REQUIRED PROPERTY title: std::str;
  };
};
