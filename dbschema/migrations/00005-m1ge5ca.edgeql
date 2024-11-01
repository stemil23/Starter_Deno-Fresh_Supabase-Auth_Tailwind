CREATE MIGRATION m1ge5cawafjdfmigxv5k4wpuffapexyrcj6u563jvq3ju6u42wsioa
    ONTO m15lmn6gplyoyf3j73gsnnbnd6fjerlyfdr4533b5xpehq2la6ztia
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY all_caps_title {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
