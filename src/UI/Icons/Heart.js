import PropTypes from 'prop-types'

export const Heart = ({ color = 'red', size = 24, style }) => {
  return (
    <div style={{ color, height: size, width: size, ...style }}>
      <svg
        fill="currentColor"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 475.528 475.528"
        xmlSpace="preserve"
        stroke={'currentColor'}>
        <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g>
            {' '}
            <g>
              {' '}
              <path d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706 c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953 C-54.844,154.658,26.437,351.092,237.376,436.245z"></path>{' '}
            </g>{' '}
          </g>{' '}
        </g>
      </svg>
    </div>
  )
}
Heart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf([24, 32, 48]),
  style: PropTypes.object
}
export default Heart
