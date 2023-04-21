import { previewData } from "next/dist/client/components/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import {PreviewSuspense} from 'next-sanity/preview'
import Hero from "@/components/Hero";
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Head from 'next/head';

export const revalidate = 30;  // In seconds

const query = groq` 
*[_type == "project"] {
   ..., 
   technologies[]->
 } | order(_createdAt desc)
`;

const query1 = groq` 
 *[_type == "pageInfo"][0]
`;

const query3 = groq` 
 *[_type == "skill"]
`;
const query4 = groq` 
 *[_type == "social"]
`;

export default  async function  HomePage ()  {

 

  const socials = await client.fetch(query4);
  const projects = await client.fetch(query);
  const pageInfo = await client.fetch(query1);
  const skills = await client.fetch(query3);
  
  if (previewData()) {
    return (
      <PreviewSuspense fallback={(
        <div role="status">
        <h1 className="text-red-500 flext items-center">Loading...</h1>
      </div>
      )}>
        
        <div className='h-screen  touch-pan-y overflow-x-hidden snap-y snap-mandatory overflow-y-scroll bg-black'>
     
        <Head>
        <link rel="icon" href="/dea.icon" />
        </Head>
     
         <Header socials={socials} />
      
     <section className='snap-center'>
        <Hero pageInfo={pageInfo} />
         
     </section>
     
     <section id='About' className='snap-center'>
       <About pageInfo={pageInfo} />
     </section>
     
     <section id="Experience" className='snap-center'>
     <Experience skills={skills} />
      </section>

      <section id="Projects" className='snap-center '>
        <Projects projects={projects} />
      </section>
      <section id="Contact" className='snap-end'>
        <Contact />
      </section>

    </div>
      </PreviewSuspense>
    );
  }
  
  
    return (
     
      <div className='h-screen  touch-pan-y overflow-x-hidden snap-y snap-mandatory overflow-y-scroll bg-black'>
     
       <Head>
        <link rel="icon" href="/dea.icon" />
        </Head>
    
    
     <Header socials={socials} />
      
        
    

     <section className='snap-center'>
        <Hero pageInfo={pageInfo} />
         
     </section>
     
     <section id='About' className='snap-center'>
       <About pageInfo={pageInfo} />
     </section>
     
     <section id="Experience" className='snap-center'>
     <Experience skills={skills} />
      </section>

      <section id="Projects" className='snap-center '>
        <Projects projects={projects} />
      </section>
      <section id="Contact" className='snap-end'>
        <Contact />
      </section>

    </div>


    )

}

