-- http://db-fiddle.com/f/nwRbXfz5qCRAz1dxq9eUjR/6

-- Query database
-- Retrieve all students

-- SELECT firstname, House FROM Students WHERE House = 'Hufflepuff';


-- Alle Namen die mit H anfangen
-- SELECT firstname, House FROM Students WHERE firstname like 'H%';


-- Alle die ein O enthalten, egal ob klein oder groß
-- SELECT firstname, House, Birthdate FROM Students WHERE firstname ilike '%O%';



-- DISTINCT zeigt jede Wertkombination die wir selecten nur einmal an
-- SELECT DISTINCT House FROM students;


-- Select firstname, house from students where house = 'Gryffindor' OR house = 'Slytherin';

-- order by sortiert ergebnisse nach einer spalte, mit desc/asc können wir angeben ob auf- oder absteigend
-- sEleCt name, effect, difficulty from spells order by difficulty desc;


-- gruppiert studenten nach haus
-- select house, count(*) from students group by house;


-- select count(*) from students;


-- select sum(yearofstudy) from students;


-- select sum(yearofstudy), house from students group by house;

-- durchschnittliche schwierigkeit von zauberspruechen, ausser jene die mit avada anfangen
-- select avg(difficulty) from spells WHERE NOT name ilike 'avada%'; 


INSERT INTO Students (FirstName, LastName, House, Birthdate, YearOfStudy, WandType, BloodStatus) VALUES ('Max', 'Voßgätter', 'Hufflepuff', '1989-03-05', '1', 'Granit und Draht', 'Muggle');


-- UPDATE Students SET yearofstudy = 2 WHERE firstname = 'Max'; 

DELETE from Students WHERE house = 'Slytherin'; 


select * from students where house = 'Hufflepuff'




