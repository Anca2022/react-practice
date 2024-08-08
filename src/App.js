import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { mockArticles } from './mockData';
import BlogList from './components/BlogList';
import Animated from './components/Animated';
import Header from './components/Header';
import Hooks from './components/Hooks';
import UseEffectComp from './components/HookComponents/UseEffectComp';
import UseStateComp from './components/HookComponents/UseStateComp';
import UseReducerComp from './components/HookComponents/UseReducerComp';
import UseRefComp from './components/HookComponents/UseRefComp';
import UseCallbackComp from './components/HookComponents/UseCallbackComp';
import UseMemoComp from './components/HookComponents/UseMemoComp';
import UseContextComp from './components/HookComponents/UseContextComp';

function App() {
  const blogs = mockArticles;
  
  return (
  <div className='App'>  
    <Header></Header>
    <AnimatePresence >
      <Routes >
        <Route path="/blog" element={ 
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          >
            <BlogList blogs={blogs} />
          </motion.div>
          } />
        <Route path="/animated" element={<Animated />} />
        <Route path='/hooks' element={<Hooks/>} />
        <Route path='/hooks/useeffect' element={<UseEffectComp/>}/>
        <Route path='/hooks/usestate' element={<UseStateComp/>}/>
        <Route path='/hooks/usereducer' element={<UseReducerComp/>}/>
        <Route path='/hooks/useref' element={<UseRefComp/>}/>
        <Route path='/hooks/usememo' element={<UseMemoComp/>}/>
        <Route path='/hooks/usecallback' element={<UseCallbackComp/>}/>
        <Route path='/hooks/usecontext' element={<UseContextComp/>}/>
      </Routes>
    </AnimatePresence>
  </div>
  
  );
}

export default App;