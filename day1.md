Today is the fourth day of my challenge to learn 30 technologies in 30 days. So far I am enjoying it and getting good response from fellow developers. I am more than motivated to do it for full 30 days. In this blog, I will cover how we can very easily build blog recommendation engine using <a href="http://prediction.io/" target="_blank">PredictionIO</a>. The full blog series can be tracked on this <a href="http://whyjava.wordpress.com/30-technologies-in-30-days/" target="_blank">page</a>.

##Application Use case##
The usecase that we are implementing is similar to Amazon "Customers Who Bought This Item Also Bought these items" feature. Our usecase is people who viewed this blog also viewed these blogs.
##Developing Blog Recommender Java Application##
Now that we have created PredictionIO application its time to write our Java application. We will be using Eclipse to develop the application. I am using Eclipse Kepler which has m2eclipse integration built in. Create a new Maven based project by navigating to File &gt; New &gt; Maven Project. Choose the maven-archetype-quickstart and then enter Maven project details. Replace the pom.xml with the one shown below.

## Show me some code##


The things to note in above is the Maven dependency for PredictionIO Java API.

Now we will write a class which will insert data into PredictionIO. The class is shown below.

```
package com.shekhar.blog_recommender;

import io.prediction.Client;
import io.prediction.CreateItemRequestBuilder;

public class BlogDataInserter {

    private static final String API_KEY = "wwoTLn0FR7vH6k51Op8KbU1z4tqeFGZyvBpSgafOaSSe40WqdMf90lEncOA0SB13";

    public static void main(String[] args) throws Exception {
        Client client = new Client(API_KEY);
        addUsers(client);
        addBlogs(client);
        userItemViews(client);
        client.close();

    }

    private static void addUsers(Client client) throws Exception {
        String[] users = { "shekhar", "rahul"};
        for (String user : users) {
            System.out.println("Added User " + user);
            client.createUser(user);
        }

    }

    private static void addBlogs(Client client) throws Exception {
        CreateItemRequestBuilder blog1 = client.getCreateItemRequestBuilder("blog1", new String[]{"machine-learning"});
        client.createItem(blog1);

        
    }

    private static void userItemViews(Client client) throws Exception {
        client.identify("shekhar");
        client.userActionItem("view","blog1");
        client.userActionItem("view","blog4");
        client.userActionItem("view","blog5");
	}

}
```