CREATE MIGRATION m15lmn6gplyoyf3j73gsnnbnd6fjerlyfdr4533b5xpehq2la6ztia
    ONTO m1sbv72ozfedz5hdq7h626a466besmaaod5ihqfho5hzx4itb2qujq
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY all_caps_title {
          SET default := (std::str_upper(.title));
          RESET EXPRESSION;
          RESET CARDINALITY;
          RESET OPTIONALITY;
          SET TYPE std::str;
      };
  };
};
