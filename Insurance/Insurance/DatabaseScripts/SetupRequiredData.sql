

INSERT INTO OccupationRating ( Rating, Factor ) VALUES ('Heavy Manual' ,	1.75)
INSERT INTO OccupationRating ( Rating, Factor ) VALUES ('Light Manual' ,	1.50)
INSERT INTO OccupationRating ( Rating, Factor ) VALUES ('Professional' ,	1.00)
INSERT INTO OccupationRating ( Rating, Factor ) VALUES ('White Collar' ,	1.25)


INSERT INTO Occupation ( [OccupationType], [RatingID]) VALUES ('Author', (SELECT MAX(ID) FROM OccupationRating WHERE Rating='White Collar') )
INSERT INTO Occupation ( [OccupationType], [RatingID]) VALUES ('Cleaner', (SELECT MAX(ID) FROM OccupationRating WHERE Rating='Light Manual') )
INSERT INTO Occupation ( [OccupationType], [RatingID]) VALUES ('Doctor', (SELECT MAX(ID) FROM OccupationRating WHERE Rating='Professional') )
INSERT INTO Occupation ( [OccupationType], [RatingID]) VALUES ('Farmer', (SELECT MAX(ID) FROM OccupationRating WHERE Rating='Heavy Manual') )
INSERT INTO Occupation ( [OccupationType], [RatingID]) VALUES ('Florist', (SELECT MAX(ID) FROM OccupationRating WHERE Rating='Light Manual') )
INSERT INTO Occupation ( [OccupationType], [RatingID]) VALUES ('Mechanic', (SELECT MAX(ID) FROM OccupationRating WHERE Rating='Heavy Manual') )

