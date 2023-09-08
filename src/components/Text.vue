<template>
    <section id="body">
    <section id="section-text">
    <h2>What is Semantic HTML?</h2>
    <p id="first"><i>Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages and web applications rather than merely to define its presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents. CSS is used to suggest its presentation to human users.</i>- <b>Wikipedia</b></p>
    <br>
    <h2>Why is it important?</h2>
    <p id="second">Semantic HTML is quite important for some reasons:
    <br><br>1. Accessibility: Semantic HTML elements have inherent meaning and structure, making it easier for screen readers and assistive technologies to interpret and present web content to users with disabilities. When you use semantic elements like header, nav, main, footer, and article, you provide context and hierarchy to your content, improving its accessibility. This inclusivity ensures that people with disabilities can access and understand your web content effectively.
    <br><br>2. Code Maintainability: Semantic HTML promotes clean and organized code. When you use semantic elements appropriately, your code becomes more self-explanatory and easier to read for both you and other developers who may work on the project. This makes maintenance and collaboration more efficient especially having an open source project.
    <br><br>3. User Experience: Semantic HTML elements convey the structure of your content, making it easier for users to navigate your website. Visitors can quickly identify headers, main content areas, navigation menus, and footers, enhancing their overall experience and reducing confusion. 
    <br><br><br>This is just 3 reasons why it’s important, there are more like Future-Proofing as HTML is going for a more cleaner code structure, SEO Benefits as Search engines, like Google, rely on structured data to understand web content better. Semantic HTML elements provide this structure by defining the hierarchy and purpose of different parts of a webpage. When your website uses semantic elements like <code>article</code>, section, and time, search engines can index your content more accurately, potentially leading to higher search engine rankings and increased organic traffic.and other thing that basically make your website better.
    </p>
    <br><br>
    <h3>Conclusion</h3>
    <p id="third">
    <br>The web is evolving towards cleaner and more structured code, and Semantic HTML plays a vital role in this transition. As search engines increasingly prioritize structured data, websites that implement schema.org markup alongside Semantic HTML will likely gain a competitive advantage in SEO. Staying updated with these trends can position your website for success in the ever-changing online landscape.
    </p>
    </section>
    <img src="https://www.w3schools.com/html/img_sem_elements.gif" alt="Sections" width="200" height="250" id="img-2"> 
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/HTML_element_content_categories.png" alt="Image for wikipedia" width="400" height="300" id="img-1">
    </section> 
</template>

<style>
#section-text {
    margin: 40px 100px;
}

h2 {
    font-family: 'Poppins';
}

h3 {
    font-family: 'Poppins';
    font-size: 25px;
}
#first {
    width: 100%;
}

#second {
    font-family: 'Inter';
    width: 750px;
}

#third {
    width: 750px;
    margin-top: -30px;
}

#img-1 {
    margin-left: 980px;
    margin-top: -700px !important;
    position: absolute;
    border-radius: 6%;
}

#img-2 {
    border-radius: 6%;
    margin-left: 1080px;
    margin-top: -350px !important;
    position: absolute;
}

#body {
    margin: 0 10%;
}

a {
    text-decoration: none;
}

@media screen and (max-width: 768px){
  #section-text {
    margin: 0 !important;
}

#body {
    margin: 0 10px;
}

p {
    max-width: 100% !important;
}
#img-1 {
    margin-left: 0;
    margin-top: 0 !important;
}

#img-2 {
    margin-left: 0;
    margin-top: 20px !important;
}
}
</style>