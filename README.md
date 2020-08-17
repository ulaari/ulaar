<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Ulaar
</h1>

## Setup

* Create a custom search ID in [Google custom search](https://cse.google.co.in/cse/all). And set the `cseId` value in `gatsby-config.js`:

  ```
  cseId: `{Custom Search ID}`
  ```

* Add the website in Disqus. And set the `disqusShortname` value in `gatsby-config.js`:

  ```
  disqusShortname: `{Disqus Shortname}`
  ```

* Create a new list in Mailchimp and add the `mailchimpEndpoint` in `gatsby-config.js`

  ```
  mailchimpEndpoint: `Mailchimp Endpoint`
  ```

* Add the website in Google analytics and set the tracking ID in `gatsby-config.js`

  ```
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "{Google Analytics Tracking ID}",
    },
  }
  ```


## 🚀 Quick start

1.  **Run development server.**

    Navigate into the site’s directory and start it up.

    ```shell
    cd ulaar/
    gatsby develop
    ```

    The site will run at `http://localhost:8000`!

2.  **Open the source code and start editing!**

    All the blog's content is inside `src/content` directory. To create a new blog post, create a new file and start writing content. Make sure to add the post metadata on top of the file inside `---` lines. Check out other blog posts to find out what metadata to add.

3. **Push new blog to the site**    

    Once you're done editing the post, push it to the github repository:

    ```
    git add .
    git commit -m "New blog post"
    git push origin master
    ```

4. **Publish blog to the live website through netlify**

    Netlify should automatically build the site but won't publish it if `Auto deploy` is not turned on. Go to https://app.netlify.com - Open `Deploys` tab - Click `Start auto publishing` to turn on Auto deploy.

    From next time onwards, netlify will automatically publish the new changes to the live website after `git push`.