import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.logo}>LinkUp &copy; Designed & Developed By Code Czars</div>
        <div className={styles.links}>
          <a href="/academics" className="hover:text-[#128958] duration-[500]">
            Academia
          </a>
          <a
            href="/industries"
            className="hover:text-[#128958] duration-[500]"
          >
            Industries
          </a>
          <a
            href="/login"
            className="hover:text-[#128958] duration-[500]"
          >
            login
          </a>
          <a href="/signup" className="hover:text-[#128958] duration-[500]">
            Signup
          </a>
        </div>
        <div className={styles.coffee}>
          <a
            href="/contactus"
            className="font-algerian"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <img src="/assets/images/logoo.svg" alt="" className="w=[20rem] h-[30rem] opacity-95" />
      </div>
    </>
  )
}

export default Footer
