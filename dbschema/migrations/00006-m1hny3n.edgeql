CREATE MIGRATION m1hny3n3rdyticuwlb2ki2vdxbo2hwooikeb74chn77ramo6brgfpq
    ONTO m1ge5cawafjdfmigxv5k4wpuffapexyrcj6u563jvq3ju6u42wsioa
{
  ALTER TYPE default::Movie {
      CREATE REQUIRED PROPERTY subtitle: std::str {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
