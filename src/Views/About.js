import React from 'react'

function About(){
    return(
        <div>
            <div className="text-center">
                <div className="bg-indigo-700 text-white">
                    <div className="flex justify-center">

                        <h1 className ="font-bold text-3xl mb-3 border-b-2 w-64">Devin Young</h1>
                        
                    </div>
                        
                    <h1 className="font-bold text-2xl mb-3">Software Engineer in Toronto, Ontario</h1>
                
                </div>
                <div  className="flex justify-evenly">
                    <div className="w-1/2 pr-3">

                        <h1 className="font-bold text-2xl mb-3 border-b-2">About me</h1>
                    
                        <p className="text-left">
                        An honest, self motivated and hardworking college graduate with a positive attitude towards my studies, always challenging myself, continuously improving in my career in Software Engineering Technology.
                        </p>
                    </div>
                    <div className="w-1/2 pl-3">
                        <h1 className="font-bold text-2xl mb-3 border-b-2">Skills</h1>
                        <ul className="list-disc list-inside text-left">
                            
                            <li>Experience using several operating systems and programming languages.</li>
                            <li>Knowledge and understanding in project planning, documentation, and methodologies.</li>
                            <li>Responsible, flexible, team-player who is able to work under pressure and fulfill deadlines quickly.</li>
                            <li>Excellent in identifying and solving problems, demonstrating ability to pay attention to accuracy and detail.</li>
                            <li>Professional attitude and communication skills, with a high level of understanding technical terms and information.</li>
                        
                        </ul>
                    </div>
                </div>
                <div  className="flex justify-evenly">
                    <div className="w-1/2 pr-3 text-left">

                        <h1 className="font-bold text-2xl text-center mb-3 border-b-2">Education</h1>

                        <h2 className="font-bold text-lg mt-3">Software Engineering Technology (Co-op) Advanced Diploma (Sept. 2016 – Dec. 2019)</h2>

                        <p className=" text-lg mt-3">Centennial College, Scarborough, ON</p>

                        <ul className="list-disc list-inside mt-3">
                            
                            <li>GPA of 4.395/4.5</li>
                            <li>Awarded High Honors</li>

                        </ul>

                        

                    </div>
                    <div className="w-1/2 pl-3 text-left">

                        <h1 className="font-bold text-2xl text-center mb-3 border-b-2">Work Experience</h1>

                        <h2 className="font-bold text-lg mt-3">Media Developer (Co-op)</h2>

                        <p className=" text-lg mt-3">Pearson Canada Inc., North York, ON</p>

                        <ul className="list-disc list-inside mt-3">
                            
                            <li>Collaborated in small specialized teams within a scrum-based environment to complete standalone web applications and scripts.</li>
                            <li>Created a user-friendly web application that consisted of JavaScript code, which manipulated raw data collected from a known google spreadsheet into a JSON formatted object.</li>

                        </ul>

                    </div>
                </div> 
                <div  className="flex justify-evenly">

                    <div className="w-1/2 pr-3 text-left">
                        
                    <h1 className="font-bold text-2xl text-center mb-3 border-b-2">Relevant Courses</h1>

                    <ul className="list-disc list-inside mt-3">
                        
                        <li>Software Engineering Methodologies</li>
                        <li>Client-Side Web Development</li>
                        <li>Data Warehouse &amp; Algorithms</li>
                        <li>API Engineering &amp; Cloud Computing</li>
                        <li>Programming I, II, III</li>
                        <li>Project Management</li>

                    </ul>

                    </div>

                    <div className="w-1/2 pl-3 text-left">
                        
                    <h1 className="font-bold text-2xl text-center mb-3 border-b-2">Projects</h1>

                    <ul className="list-disc list-inside mt-3">

                        <li>Created a MEAN stack restaurant web application displaying user role authentication, service worker functionality, and graphical representation of restaurant inventory management and user traffic.</li>
                        <li>Collaborated with a team of colleagues to practice advanced project management documentation on the simulation of an image scanning/processing web application.</li>
                        <li>Developed Python predictive analysis scripts on a real-life dataset about bike theft.</li>

                    </ul>
                        
                    </div>

                </div>
                <div>

                    <h1 className="font-bold text-2xl text-center mt-3 border-b-2">Technical Skills</h1> 

                    <div  className="flex justify-evenly">

                        <div className="w-1/2 pl-3 text-left">

                            <h2 className="font-bold text-center text-lg mt-3 mb-3 border-b-2">Operating Systems</h2>

                            <ul className="list-disc list-inside mt-3">

                                <li>Windows</li>
                                <li>Unix/Linux</li>

                            </ul>
                            
                        </div>

                        <div className="w-1/2 pl-3 text-left">

                            <h2 className="font-bold text-center text-lg mt-3 mb-3 border-b-2">Languages/Scripts</h2>

                            <ul className="list-disc list-inside mt-3">

                                <li>C#</li>
                                <li>SQL</li>
                                <li>ASP.NET</li>
                                <li>Java</li>
                                <li>Google App Scripts</li>
                                <li>Python</li>

                            </ul>
                            
                        </div>

                        <div className="w-1/2 pl-3 text-left">

                            <h2 className="font-bold text-center text-lg mt-3 mb-3 border-b-2">Web Design/Development</h2>

                            <ul className="list-disc list-inside mt-3">

                                <li>HTML</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>MEAN Stack</li>
                                <li>React</li>

                            </ul>
                            
                        </div>

                        <div className="w-1/2 pl-3 text-left">

                            <h2 className="font-bold text-center text-lg mt-3 mb-3 border-b-2">Others</h2>

                            <ul className="list-disc list-inside mt-3">

                                <li>MS Office</li>
                                <li>MS Project</li>
                                <li>MS Visio</li>
                                <li>MS Azure</li>
                                <li>Amazon Web Services (AWS)</li>

                            </ul>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About