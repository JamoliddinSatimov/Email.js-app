export const Form = ({sendEmail,inputEmail}) => {
  return (
    <>
      <form onSubmit={sendEmail} autoComplete="off" className="app__form">
        <input
          ref={inputEmail}
          className="app__input-email light__input"
          type="email"
          placeholder="enter your email addres"
          name="email"
          required
        />
        <button type="submit" className="app__btn light__button">
          notify me
        </button>
      </form>
    </>
  );
};
