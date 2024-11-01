CREATE MIGRATION m1jiqselbpchuc4nxufl2tpvmhkkdoif4qe7cakr4nmhlzsinuegqq
    ONTO m1ggwhqovlpxqcmx442nexhyrlavk5nlspijggwqss6dft3misr5mq
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY slug {
          USING (std::str_lower(std::re_replace(r'[-\s]+', '-', std::re_replace(r'[^\w\s-]', '', .title), flags := 'g')));
      };
  };
};
