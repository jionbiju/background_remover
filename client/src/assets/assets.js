import logo from './mylogo.png'
import logo_icon from './mylogo_icon.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './myheader.png'
import remove_bg_icon from './myremove_icon.png'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './myupload_icon.png'
import download_icon from './mydownload_icon.png'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import insta_icon from './insta_icon.png'
import linkedin_icon from './linkedin_icon.png'
import profile_img_1 from './myprofile_img_1.jpg'
import profile_img_2 from './myprofile_img_2.jpg'
import profile_img_3 from './myprofile_img_3.jpg'
import credit_icon from './credit_icon.png'
import five_star from './5_star.png'
import copyRight_icon from './copyRight_icon.png'

export const assets = {
    logo,
    logo_icon,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    insta_icon,
    linkedin_icon,
    upload_btn_icon,
    credit_icon,
    five_star,
    copyRight_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "I tried a few tools before, but this background remover was the fastest and most accurate. It handled even messy edges perfectly. Great for my presentation slides!",
        author: "Amit K",
        image: profile_img_1,
        jobTitle:'Web Developer'
    },
    {
        id: 2,
        text: "Great app, easy to use. Helps our small business save time and money to create different marketing materials professionally. Thank you",
        author: "Natasha",
        image: profile_img_2,
        jobTitle:'UI Deginer'
    },
    {
        id: 3,
        text: "I had a group photo with a complex background, and it still managed to separate the people perfectly. The tool is seriously impressive!",
        author: "Nikhil T",
        image: profile_img_3,
        jobTitle:'Graphic Designer'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]