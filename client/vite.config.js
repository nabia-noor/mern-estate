import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  server: {
    // port: 8000
  }
})




// https://vite.dev/config/
// export default defineConfig({
//   server:{
//     proxy: {
//       '/api':{
//         target:'http://localhost:3000',
//         secure: false,
//     },
//   },
// },
//   plugins: [react()],
// });
