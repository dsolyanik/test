In your system should be installed: git, npm

Do this steps for run app:

1. git clone https://github.com/dsolyanik/test.git
2. run 'npm install' under ../your/path/to/project/test
3. run 'bower install' under ../your/path/to/project/test
4. run 'npm start' under ../your/path/to/project/test
5. go to http://localhost:8000/app/


Some comments:

 Arrays format is : [{username:”david”,permissions:”admin”},{username:”meir”,permissions:”manager”}
 User hasn't id, thus I make field name as readonly in edit user form.


   Initially all data grabed from content.json file.
   Then after add/edit this data saved not on external storage (All new data after restart would be lost)

   html attribute style is a bad practise


For localization I used angular-translate