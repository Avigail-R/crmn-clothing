import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef =  await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>ssssssss</h1>
      <button onClick={logGoogleUser}>
        sign in with Google popup
      </button>
    </div>
  );
};
export default SignIn;