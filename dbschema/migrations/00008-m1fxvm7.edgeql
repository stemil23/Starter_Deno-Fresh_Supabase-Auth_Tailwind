CREATE MIGRATION m1fxvm7dmwpaw7hzgtlfohvmjmmo42jmo3i7nnnywm6amt2ezo7xdq
    ONTO m1fbj5rephd77ynpx3geta5pnwycp4fyzsrpad6ruyaczispbg3l2a
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY slug {
          USING (std::str_lower(std::re_replace(r'[-\s]+', '-', std::re_replace(r'[^\w\s-]', '', .title))));
      };
  };
};
