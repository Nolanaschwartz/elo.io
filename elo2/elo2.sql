/* Function  Declaration */
CREATE OR REPLACE FUNCTION getSearchedNames(nameToSearch text) RETURNS SETOF players AS $$ SELECT * FROM players;
$$ LANGUAGE sql;


/* Function Code */
 SELECT * FROM players
 WHERE LOWER(name) LIKE '%' || LOWER(nametosearch) || '%'  OR LOWER(verified_name) LIKE '%' || LOWER(nametosearch) || '%'

 /* This solution takes in a text argument and returns all rows that matches either the verified name or name columns */

/*
If I were to make improvements to the schema and if space is not an issue I would make a new column to concatenate name and verified_name
and lowercase them upon insertion. This would make the query much simpler to write and improve readability.
*/