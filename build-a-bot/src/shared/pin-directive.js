// /* eslint-disable no-param-reassign */
// export default {
//   mounted: (element, binding) => {
//     console.log('mounted');
//     // Object.keys(binding.modifiers).forEach((key) => {
//     //   element.style[key] = '5px';
//     //   element.style[key] = '5px';
//     // });
//     Object.keys(binding.value).forEach((key) => {
//       element.style[key] = binding.value[key];
//     });
//     element.style.position = 'absolute';
//   },
//   updated: (element, binding) => {
//     console.log('updated');
//     // Object.keys(binding.modifiers).forEach((key) => {
//     //   element.style[key] = '5px';
//     //   element.style[key] = '5px';
//     // });
//     Object.keys(binding.value).forEach((key) => {
//       element.style[key] = binding.value[key];
//     });
//     element.style.position = 'absolute';
//   },
//   created: () => {
//     console.log('created');
//   },
//   beforeMount: () => {
//     console.log('beforeMount');
//   },
//   beforeUpdate: () => {
//     console.log('beforeUpdate');
//   },
//   beforeUnmount: () => {
//     console.log('beforeUnmount');
//   },
//   unmouted: () => {
//     console.log('beforeUnmount');
//   },
// };

/* eslint-disable no-param-reassign */
export default function (element, binding) {
  element.style.position = 'absolute';
  Object.keys(binding.value).forEach((key) => {
    element.style[key] = binding.value[key];
  });
}
