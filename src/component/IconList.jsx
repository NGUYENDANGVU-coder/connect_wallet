import { faArrowRightArrowLeft, faHandSparkles, faPaperPlane, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function IconList() {
  return (
    <div>
      <div className='flex gap-x-4'>
                    <div className=' ndv__icon-profile'>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className=' ndv__icon-profile'>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <div className='ndv__icon-profile'>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    </div>
                    <div className='ndv__icon-profile'>
                        <FontAwesomeIcon icon={faHandSparkles} />
                    </div>
                </div>
    </div>
  )
}
