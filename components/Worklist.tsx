import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';


export const Worklist = () => {

    const works = [{
        title: 'ソロキャンプ日和',
        url: 'https://solocamp-diary.vercel.app/',
        img: '/camp_cover.png',
        tech: 'next.js、supabase、Google Maps API、tailwindcss使用',
    }, {
        title: 'ペルソナ作り × Chat GPT',
        url: 'https://chat-gpt-perusona.vercel.app/',
        img: '/gpt_cover.png',
        tech: 'openAI API、next.js、tailwindcss使用', 
    }, {
        title: 'ペルソナ作り × Chat GPT',
        url: 'https://chat-gpt-perusona.vercel.app/',
        img: '/gpt_cover.png',
        tech: 'openAI API、next.js、tailwindcss使用', 
    }]
    return (
<>

            
        <div className='px-96 py-8 max-md:px-0.5 max-md:py-2'>
<h1 className='text-white text-6xl font-bold text-center my-40 max-md:text-2xl max-md:my-10'>LIST</h1>


<div className='flex justify-center max-md:block'>
                {works.map((work) => (
                            
    
<div className='mx-9 max-md:px-0 max-md:my-10' key={work.title}>
                <Card sx={{ maxWidth: 945,height:300 }}>
            <CardActionArea >
                <CardMedia              
                component="img"
                height="140"
                image={work.img}
                alt="cover"
                                />
                 <Link href={work.url} >               
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {work.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {work.tech}
                </Typography>
                </CardContent></Link>
            </CardActionArea>
            </Card>            
                            
                      
         </div>               
                        ))}

  </div>

          

                </div>

            </>
            )
}
