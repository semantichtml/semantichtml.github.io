<template>
    <section id="body">
    <section id="section-text">
    <h2>What is Semantic HTML?</h2>
    <p id="first"><i>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents. CSS is used to suggest its presentation to human users.</i>- <b>Wikipedia</b></p>
    <br>
    <h2>Why is it important?</h2>
    <p id="second">Semantic HTML is quite important for some reasons:
    <br><br>1. Accessibility: Semantic HTML elements have inherent meaning and structure, making it easier for screen readers and assistive technologies to interpret and present web content to users with disabilities. When you use semantic elements like  <code>&lt;header&gt;</code>,  <code>&lt;nav&gt;</code>,  <code>&lt;main&gt;</code>,  <code>&lt;footer&gt;</code>, and  <code>&lt;article&gt;</code>, you provide context and hierarchy to your content, improving its accessibility. This inclusivity ensures that people with disabilities can access and understand your web content effectively.
    <br><br>2. Code Maintainability: Semantic HTML promotes clean and organized code. When you use semantic elements appropriately, your code becomes more self-explanatory and easier to read for both you and other developers who may work on the project. This makes maintenance and collaboration more efficient especially having an open source project.
    <br><br>3. User Experience: Semantic HTML elements convey the structure of your content, making it easier for users to navigate your website. Visitors can quickly identify headers, main content areas, navigation menus, and footers, enhancing their overall experience and reducing confusion. 
    <br><br><br>This is just 3 reasons why it’s important, there are more like Future-Proofing as HTML is going for a more cleaner code structure, SEO Benefits as Search engines, like Google, rely on structured data to understand web content better. Semantic HTML elements provide this structure by defining the hierarchy and purpose of different parts of a webpage. When your website uses semantic elements like <code>&lt;article&gt;</code>,  <code>&lt;section&gt;</code>, and  <code>&lt;time&gt;</code>, search engines can index your content more accurately, potentially leading to higher search engine rankings and increased organic traffic.and other thing that basically make your website better.
    </p>
    <br><br>
    <h3>Conclusion</h3>
    <p id="third">
    <br>The web is evolving towards cleaner and more structured code, and Semantic HTML plays a vital role in this transition. As search engines increasingly prioritize structured data, websites that implement schema.org markup alongside Semantic HTML will likely gain a competitive advantage in SEO. Staying updated with these trends can position your website for success in the ever-changing online landscape.
    </p>
    </section>
    <img src="/sh-exemple-dark.svg" alt="Sections" width="250" id="img-2" class="img-dark"> 
    <img src="/sh-exemple-light.svg" alt="Sections" width="250" id="img-2" class="img-light"> 
    </section> 
</template>

<style>

.img-dark {
  display: none;
}

.img-light {
  display: block;
}

@media (prefers-color-scheme: dark) {
  .img-dark {
    display: block;
  }

  .img-light {
    display: none;
  }
}
/* Base styles */
#section-text {
  margin: 40px 100px;
}

h2, h3 {
  font-family: 'Poppins', sans-serif;
}

#first, #second, #third {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
}

#img-2 {
  margin-top: 250px; /* Ensure a gap between text and images */
  width: 300px;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    transition: all 300ms ease-out;
}
  
  img:hover {
    transform: scale(1.06);
    cursor: zoom-in;
  }
  
  img:active {
    transform: scale(1.35);
  }

/* Desktop styles */
#img-1 {
  float: right;
  margin-left: 20px;
}

#img-2 {
  float: right;
  margin-left: 20px;
}

#body {
  margin: 0 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

/* Ensure images appear on the right when there's enough space */
@media screen and (min-width: 769px) {
  #img-1, #img-2 {
    flex: 0 0 calc(0% - 250px); /* 50% width with a small gap */
    margin-top: 20%;
  }
}

@media screen and (max-width: 1588px) {
  #img-1, #img-2 {
    margin-top: 5%;
  }
}
</style>