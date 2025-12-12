import { Injectable } from '@angular/core';
import { Icard } from '../model/card';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  Editcard$ : Subject<Icard> = new Subject()
   courses : Array<Icard> = [
  {
    cardId: "1",
    heading: "Full Stack Web Development – Udemy",
    content: "Complete MERN stack training covering React, Node.js, Express, MongoDB, and project building."
  },
  {
    cardId: "2",
    heading: "Data Science with Python – Coursera",
    content: "Learn data analysis, visualization, machine learning fundamentals using Python libraries."
  },
  {
    cardId: "3",
    heading: "Angular Development – Google Developers",
    content: "Hands-on introduction to Angular framework including components, services, pipes, routing, and RxJS."
  },
  {
    cardId: "4",
    heading: "Java Programming Masterclass – Udemy",
    content: "Covers OOP, Java basics, advanced concepts, collections, file handling, and Spring intro."
  },
  {
    cardId: "5",
    heading: "AWS Cloud Practitioner – Amazon Web Services",
    content: "Foundation-level cloud concepts, EC2, S3, IAM, billing, security and deployment knowledge."
  },
  {
    cardId: "6",
    heading: "UI/UX Design – Google UX Certificate",
    content: "User research, wireframing, prototyping, Figma basics, and real-world UI creation skills."
  },
  {
    cardId: "7",
    heading: "Cybersecurity Fundamentals – IBM SkillsBuild",
    content: "Learn network security, ethical hacking basics, encryption, cyber-attacks, and prevention techniques."
  },
  {
    cardId: "8",
    heading: "Machine Learning Specialization – Stanford",
    content: "ML algorithms, supervised & unsupervised learning, deep learning introduction by Andrew Ng."
  },
  {
    cardId: "9",
    heading: "Digital Marketing Essentials – HubSpot Academy",
    content: "SEO, SEM, social media marketing, content strategy, analytics, and campaign planning."
  },
  {
    cardId: "10",
    heading: "Mobile App Development – Google Android",
    content: "Kotlin/Java-based Android development with UI components, layouts, API integration, and app publishing."
  }
];

  constructor() { }
  fetchAllCards():Observable<Array<Icard>>{
   return of(this.courses)
  }

  AddCardsIndata(obj:Icard):Observable<Icard>{
    this.courses.unshift(obj)
    return of(obj)
  }

  updatecard(upObj:Icard):Observable<Icard>{
    let getindex= this.courses.findIndex(c=>c.cardId===upObj.cardId)
    this.courses[getindex] = upObj
    return of(upObj
    )
  }

  onRemoveobj(id:string):Observable<string>{
 let getindex= this.courses.findIndex(c=>c.cardId===id)  
 this.courses.splice(getindex,1)

 return of(id)

 
}
}
