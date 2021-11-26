import { defineStore } from 'pinia';
import breakfast1 from '../assets/Breakfast/breakfast1.png';
import breakfast2 from '../assets/Breakfast/breakfast2.png';
import breakfast3 from '../assets/Breakfast/breakfast3.png';
import breakfast4 from '../assets/Breakfast/breakfast4.png';
import breakfast5 from '../assets/Breakfast/breakfast5.png';
import breakfast6 from '../assets/Breakfast/breakfast6.png';

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
          image: breakfast6,
        },
        {
          id: 8,
          name: 'Healthy Meal Plan',
          type: 'lunch',
          price: 4.99,
          details:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga labore repellendus earum eveniet impedit at assumenda sunt saepe nobis!',
          image: breakfast6,
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
