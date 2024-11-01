CREATE MIGRATION m1fbj5rephd77ynpx3geta5pnwycp4fyzsrpad6ruyaczispbg3l2a
    ONTO m1hny3n3rdyticuwlb2ki2vdxbo2hwooikeb74chn77ramo6brgfpq
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY all_caps_title {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY slug {
          RESET default;
          USING (std::str_lower(std::re_replace(r'\s+', '-', std::re_replace(r'[^\w\s]', '', .title))));
      };
  };
};
