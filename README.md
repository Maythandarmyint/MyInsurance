# MyInsurance

Angular JS, C#, .Net Framework 4.5, Visual Studio 2017 in one solution.
Dependency injection (Simple Injector)

1)Create sql database with the name Insurance or your preferred db name.
2)Run Insurance.sql which is under Insurance\DatabaseScripts folder.
3)Run SetupRequiredData.sql to insert default data to Occupation & Occupation Rating tables.
4)Change the data source, initial catalog, user id and password in Web.config.
5)Clean and Rebuild the soloution and give it a go.

Run the project
1.Required fields label will show when occupancy dropdown on change
2.Premium will calculate only if Age & Death sum assured has numeric value
3.Premium will calculate when occupation dropdown change or click calculate
 
