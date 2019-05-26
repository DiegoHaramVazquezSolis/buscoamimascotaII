import { useEffect } from 'react';
import H5Styled from '../styled/H5Styled';
import ButtonOutlined from './Buttons/ButtonOutlined';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  justifyContent: 'center'
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function DropZoneWithPreview({ title, files, getRootProps, getInputProps, removeImages }) {
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
        <>
          <label className='mt-3'><H5Styled>{title}</H5Styled></label>
            <section className="container">
                {files.length <= 0 ?
                    <div {...getRootProps()} className='dropzone'>
                        <input {...getInputProps()} />
                        <p className='text-center'>Arrastra aqui la imagen de tu mascota, o da click para seleccionarla</p>
                    </div>
                    :
                    <div className='d-flex justify-content-center'>
                        <div className='row'>
                            <div className='col-12'>
                                <aside style={thumbsContainer}>
                                    {thumbs}
                                </aside>
                            </div>
                            <div className='col-12' style={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonOutlined value='Quitar imagen' onClick={removeImages} />
                            </div>
                        </div>
                    </div>
                }
            </section>
            <style jsx>{`
                .dropzone {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-text: center;
                    padding: 20px;
                    border-width: 2px;
                    border-radius: 2px;
                    border-color: #aaaaaa;
                    border-style: dashed;
                    background-color: #e2e2e2;
                    color: #7c7c7c;
                    outline: none;
                    transition: border .24s ease-in-out;
                }
                .container {
                    display: flex;
                    flex-direction: column;
                    font-family: sans-serif;
                }
            `}</style>
        </>
  );
}

export default DropZoneWithPreview;