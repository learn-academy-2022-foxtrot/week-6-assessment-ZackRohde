# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix this you add the 1st model name_id:integer as a column. The name of the foreign key is 1st model_id and that is how they connect the two together. The foreign key would be on the student model as it's apart of that model which connects to the primiary key.

Researched answer: I believe my way for fixing it is by adding a column, otherwise I'm unsure what to search to fix this mistake. Foreign keys and primary keys must always be connected so, the more tables you have they will all interconnect together. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, create, destroy, and update will all have params, because they all require instances to pass something to .find or .create an id. To destroy something you must .find that value which needs params passed as it's a placeholder. 

Researched answer: Show, create, destroy, update will have params being passed. Show needs params, because were finding a particular topic and we use the .find method with the params of what were looking for. Destroy is similar to show because they both are finding a topic to show or destroy. Create has params, because we are creating a topic and adding what we want them to be such as common name of a Bear and the scientific name of the Bear. Lastly, update needs params, because we need to replace the exsisitng data of 1 thing so the params won't change, but the data of those will.  

3. Name three rails generator commands. What is created by each?

Your answer: Model, Resource, and rspec. Model creates the entire table the table is the model. Resource is the easy way out as it creates the model with the given columns you input, and you don't need to worry about the routes compared to a model, it inputs a lot of the information you would normally need to do. Lastly, rspec is generated for testing purposes of Ruby like yarn is to JavaScript. 

Researched answer: The model generate command is for inputting the column names with the data type it uses. Resource is also the same thing for the set up however, it does alot of the inputting themselves meaning you don't have to worry about setting the RESTful routes. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 

// Controller Method: Index and the action would be collecting all the students in the database

action: "POST" location: /students 

// Controller Method: Create and the action would be creating 1 student to the database

action: "GET" location: /students/new

// Controller Method: New and the action is a form 

action: "GET" location: /students/2

// Controller Method: Show and the action is showing the index of 2

action: "GET" location: /students/2/edit

// Controller Method: Edit and the action is a form

action: "PATCH" location: /students/2

// Controller Method: Update and the action is you're updating exsisting data to the 2nd index

action: "DELETE" location: /students/2

// Controller Method: Destroy and your action is deleting index 2 for forever from the database

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Story 1: As a developer I want to create my application using my preffered languages. 

User Story 2: As a developer I want my user to see a home page with a list of "to dos".

User Story 3: As a developer I want my user to be able to cross out or delete completed tasks.

User Story 4: As a developer I want my user to be able to add new tasks. 

User Story 5: As a developer I want my user to be able to edit tasks. 

User Story 6: As a developer I want my user to be able to make importance of a task. 

User Story 7: As a developer I want my user to be able to categorize tasks. 

User Story 8: As a developer I want my user to be able to see all tasks and the categories they belong too. 

User Story 9: As a developer I want my user to be able to add notes to a task.

User Story 10: As a developer I want my user to be able to have the ability to set remainders. 
