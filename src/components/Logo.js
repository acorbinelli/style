import logo from "../imagesUI/logo/logo.png"
import headerConfig from "../storeConfig/headerConfig"

const Logo = () => {
  return (
    <img
      src={logo}
      style={{ width: headerConfig.logo.resolution.width }}
      alt='website logo'
    />
  )
}

export default Logo
