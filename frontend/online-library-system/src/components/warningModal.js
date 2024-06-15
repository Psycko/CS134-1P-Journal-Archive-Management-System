import React, { useEffect, useState } from 'react'

export default function WarningModal({ visible, titleFile, onConfirmDelete, onClose }) {
    const [show, setShow] = useState(visible);

    useEffect(() => {
        setShow(visible);
    }, [visible])

    const onCloseHandle = (e) => {
        if (e.target.id === "outside" || e.target.id === "button") {
            setShow(false);
            onClose();
        }
    }

    if (!show) return null;

    return (

        <div
            id='outside'
            onClick={onCloseHandle}
            className=' tw-fixed tw-inset-0 tw-z-50 tw-bg-opacity-20 tw-backdrop-blur-sm tw-flex tw-justify-center tw-items-center'>
            <div className='tw-bg-yellow-200 tw-w-2/6 tw-h-72 tw-rounded-lg tw-shadow-lg tw-p-2'>
                <div className='tw-bg-yellow-100 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-between'>
                    <div>
                        <h2>WARNING</h2>
                    </div>
                    <div>
                        <p className='tw-text-center'>Deleting a file "{titleFile}"?</p>
                    </div>
                    <div className='tw-flex tw-justify-center tw-items-center tw-gap-10'>
                        <button
                            id='button'
                            onClick={(e) => {
                                onCloseHandle(e);
                            }}
                            className='tw-w-32 tw-h-9 tw-rounded-lg'>Cancel</button>
                        <button
                            id='button'
                            onClick={(e) => {
                                onCloseHandle(e);
                                onConfirmDelete();
                            }}
                            className='tw-w-32 tw-h-9 tw-rounded-lg'>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

