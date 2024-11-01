CREATE MIGRATION m1ggwhqovlpxqcmx442nexhyrlavk5nlspijggwqss6dft3misr5mq
    ONTO m1fxvm7dmwpaw7hzgtlfohvmjmmo42jmo3i7nnnywm6amt2ezo7xdq
{
  ALTER TYPE default::Movie {
      ALTER PROPERTY title {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
