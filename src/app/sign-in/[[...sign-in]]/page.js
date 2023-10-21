import {SignIn } from "@clerk/nextjs"; 
 
function MyApp() {
  return ( 
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-slate-900 items-center  hover:bg-slate-400 text-sm normal-case",
          },
        }}
      /> 
  );
}
 
export default MyApp;