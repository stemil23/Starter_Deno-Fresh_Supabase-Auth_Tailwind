CREATE MIGRATION m1sbv72ozfedz5hdq7h626a466besmaaod5ihqfho5hzx4itb2qujq
    ONTO m1zpvlz3y4cku5cgr7yivlba62puq5x5nrkspjbfhgbjscelwcqvoq
{
  ALTER TYPE default::Movie {
      CREATE PROPERTY all_caps_title := (std::str_upper(.title));
  };
};
