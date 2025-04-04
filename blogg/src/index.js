import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Header=()=><h3>Blog/Lead Generation</h3>
const Title1=()=><h1>Still Using Traditional Business Methods? </h1>
const Title2=()=><h1>Use AI for Faster Growth & Lead Current Generation!</h1>
const Image=()=><img className="img1" src='logo192.png' alt='myWeb'/>
const Image2=()=><img src='https://funnl.ai/wp-content/uploads/2023/07/top-5-ai-lead-generation-tools.webp' alt='AnAIImage'/>

const MyBlog=()=>{
  return(
    <>
    <a hidden name="above">Here</a>
    <div className='title'>
      <table>
      <tbody>
            <tr>
              <td><Image /></td>
              <td>
                <Title1 />
                <Title2 />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Header />
              </td>
            </tr>
          </tbody>
      </table>
   
    </div>
    <div className='container2'>
    <table>
      <tr>
        <td className='tdd'>
          <Image2 />
        </td>
      </tr>
      <tr>
      <th className='thh'>First, let's clarify who leads are and why lead generation is essential for increasing traffic to your website quickly and efficiently. </th>
      </tr>
      <tr>
        <td className='tdd'>
          Leads are potential customers who have shown interest in your website by signing up or by purchasing your product. 
          And Lead Generation is the process of converting new customers into reliable future customers~
        </td>
      </tr>
      <tr>
        <th className='thh'>
          How AI Helps in Lead Generation!
        </th>
      </tr>
      <td  className='tdd'>
      As we all are aware how AI is taking over human dominated fields, and doing most task on its  own, whether it be a small task 
      like writing Essay on "Tree -Our Future" or following recent image processing trend like <a rel="noopener noreferrer" target="_blank" href='https://thebetterindia.com/417095/ghibli-ai-art-is-viral-but-can-you-recognise-these-stunning-indian-art-stylesai-studio-ghibli-anime-chatgpt-artists-india-gemini/'>Ghilbi-Art Style</a>, which has gained Tremendous Popularity in mean-time.
        <br/><br/>
      In the same Way, leads are generated through <a rel="noopener noreferrer" target="_blank" href='https://en.wikipedia.org/wiki/Artificial_intelligence'>Artificial Intelligence Technology</a> by many Businesses. AI Technology is so advanced that it collects users data, analyzes the customer behaviour & engagement
      to rank leads based on their likelihood to convert. Examples of such AI Tools includes <a rel="noopener noreferrer" target="_blank" href='https://www.hubspot.com/'>HubSpot</a> & <a rel="noopener noreferrer" target="_blank" href='https://trailhead.salesforce.com/en/credentials/aiassociate'>Salesforce AI automatically prioritize high-value</a> leads.
        <br/><br/>
      Not only this, there are many ways where AI helps in Lead Generation like suggesting personalized content to visitors hence increasing engagement & Leads conversion. <a rel="noopener noreferrer" href='https://www.netflix.com/in/' target='_blank'>Netflix</a> uses AI for reaching out potentional customers.
        <br/><br/>
      <a rel="noopener noreferrer" href='https://www.zoho.com/salesiq/login.html' target='_blank'>Zoho SalesIQ</a> is the another AI Feature the uses chatBots & analyzes what Highly engages customers in our website also in identifying potential leads. Another well known Social Media Platform <a href='https://www.hootsuite.com/'>HootSuite</a> uses AI feature in its free version to share statistics & analysis of the visitors.  
      Although Chatgpt, which we use regularly is not directly used for lead generation, but it widely used in various platforms in integrated way.

      <br/><br/>

      So, what are you waiting for? Use AI Technology to optimize your company website with Proper SEO keywords for 
      increasing traffic which ultimately leads to better Lead Generation! Also for getting your Website ranked in google's 
      search engine it should have more traffic, keywords and external links refernced to your website, For more follow <a rel="noopener noreferrer" href='https://www.searchenginejournal.com/on-page-seo/essential-factors/' target='_blank'>this guide</a>. 
      Moreover, Letting go of traditional practices & embracing AI is essential in today's world.
      For knowing more about it, visit website click on <a rel="noopener noreferrer" href="https://www.leadpages.com/blog/free-ai-tools-for-lead-generation" target='_blank'> 
      Read More</a>

      </td>
      <tr>
        <th className='thh'>Advantages of AI in Lead Generation:</th>
      </tr>
      <tr>
        <td  className='tdd'>
          <ul>
          <li><strong>Improved Lead Targeting</strong>:As AI analyzes vast amounts of data, it helps companies find potential leads.</li>
          <li><strong>Enhanced Personalization</strong>:AI powered chatBots & recommendation engines provide personalized experiences.</li>
          <li><strong>Automated filters</strong>:AI filters lead into warm, hot & cold segements using predictive analysis.</li>
          <li><strong>Cost Efficiency & Time-Saving</strong>:As AI handles repetitive tasks like emails and their follow-ups, the sales team can invest their time in closing deals instead.</li>
          <li><strong>Predictive Lead scoring</strong>:AI assigns scores to lead based on their past behaviours, hence the sales team can prioritize high-potential prospects.</li>
          </ul>
        </td>
      </tr>
  
      <tr>
        <th className='tdd'>Found this helpful? Share this Blog with your friends~</th>
      </tr>
      <tr>
      <td className='tdd' ><a className='ah' rel="noopener noreferrer" href="https://facebook.com/oytra" target="_blank">
        <i class="fab fa-facebook-f"></i>
       </a>
       <a className='ah' rel="noopener noreferrer" href="https://instagram.com/oytra" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>
      <a className='ah'  rel="noopener noreferrer" href="https://twitter.com/oytra" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
       </td>
      </tr>

      <tr>
  <td>
    <div className="author-container">
      <strong>By Pratik Sahane</strong><br/>
      I'm a student at Ramnarainan Ruia College currently pursuing a Bachelor's Degree in Computer Science. 
      My skills include web development, SEO crafting, and creative content writing. Apart from this, I also excel at programming in Python, Java & Kotlin.
      <br/><br/>
      <span>Thank you for reading my blog ❤.</span>
    </div>
  </td>
</tr>

<tr>
  <td className='tdd'>
    <b>Contact Info:</b><br/>
    <i class="fas fa-envelope"></i> pratiksahane351@gmail.com  <i class="fas fa-phone"></i> 9373349858
    <br/>
    <a href='above'>Navigate To Top</a>
  </td>
</tr>

    </table>
    </div>
    </>
  );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyBlog />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 