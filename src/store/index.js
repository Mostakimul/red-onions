import { defineStore } from 'pinia';
import breakfast1 from '../assets/Breakfast/breakfast1.png';
import breakfast2 from '../assets/Breakfast/breakfast2.png';
import breakfast3 from '../assets/Breakfast/breakfast3.png';
import breakfast4 from '../assets/Breakfast/breakfast4.png';
import breakfast5 from '../assets/Breakfast/breakfast5.png';
import breakfast6 from '../assets/Breakfast/breakfast6.png';
import dinner1 from '../assets/Dinner/dinner1.png';
import dinner2 from '../assets/Dinner/dinner2.png';
import dinner3 from '../assets/Dinner/dinner3.png';
import dinner4 from '../assets/Dinner/dinner4.png';
import dinner5 from '../assets/Dinner/dinner5.png';
import dinner6 from '../assets/Dinner/dinner6.png';
import lunch1 from '../assets/lunch/lunch1.png';
import lunch2 from '../assets/lunch/lunch2.png';
import lunch3 from '../assets/lunch/lunch3.png';
import lunch4 from '../assets/lunch/lunch4.png';
import lunch5 from '../assets/lunch/lunch5.png';
import lunch6 from '../assets/lunch/lunch6.png';

export const useMenu = defineStore('menu', {
  state: () => {
    return {
      menus: [
        {
          id: 1,
          name: 'Healthy Meal Plan',
          type: 'breakfast',
          price: 24.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: breakfast1,
        },
        {
          id: 2,
          name: 'Healthy Meal Plan',
          type: 'breakfast',
          price: 14.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: breakfast2,
        },
        {
          id: 3,
          name: 'Healthy Meal Plan',
          type: 'breakfast',
          price: 5.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: breakfast3,
        },
        {
          id: 4,
          name: 'Healthy Meal Plan',
          type: 'breakfast',
          price: 7.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: breakfast4,
        },
        {
          id: 5,
          name: 'Healthy Meal Plan',
          type: 'breakfast',
          price: 9.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: breakfast5,
        },
        {
          id: 6,
          name: 'Healthy Meal Plan',
          type: 'breakfast',
          price: 4.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: breakfast6,
        },
        {
          id: 7,
          name: 'Healthy Meal Plan',
          type: 'dinner',
          price: 4.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: dinner1,
        },
        {
          id: 8,
          name: 'Healthy Meal Plan',
          type: 'dinner',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: dinner2,
        },
        {
          id: 9,
          name: 'Healthy Meal Plan',
          type: 'dinner',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: dinner3,
        },
        {
          id: 10,
          name: 'Healthy Meal Plan',
          type: 'dinner',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: dinner4,
        },
        {
          id: 11,
          name: 'Healthy Meal Plan',
          type: 'dinner',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: dinner5,
        },
        {
          id: 12,
          name: 'Healthy Meal Plan',
          type: 'dinner',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: dinner6,
        },
        {
          id: 13,
          name: 'Healthy Meal Plan',
          type: 'lunch',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: lunch1,
        },
        {
          id: 14,
          name: 'Healthy Meal Plan',
          type: 'lunch',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: lunch2,
        },
        {
          id: 15,
          name: 'Healthy Meal Plan',
          type: 'lunch',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: lunch3,
        },
        {
          id: 16,
          name: 'Healthy Meal Plan',
          type: 'lunch',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: lunch4,
        },
        {
          id: 17,
          name: 'Healthy Meal Plan',
          type: 'lunch',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: lunch5,
        },
        {
          id: 18,
          name: 'Healthy Meal Plan',
          type: 'lunch',
          price: 8.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: lunch6,
        },
      ],
      counter: 0,
    };
  },
  getters: {
    // get only 6 meal
    homeMeal: (state) => {
      let filterMenu = [];
      for (let i = 0; i < 6; i++) {
        filterMenu.push(state.menus[i]);
      }
      return filterMenu;
    },
  },
});
