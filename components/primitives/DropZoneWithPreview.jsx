import { useEffect } from 'react';
import ButtonOutlined from './Buttons/ButtonOutlined';
import Body1 from '../styled/Body1';
import Subtitle1 from '../styled/Subtitle1';

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
          <label className='mt-3'><Body1>{title}</Body1></label>
            <section className="container">
                {files.length <= 0 ?
                    <div {...getRootProps()} className='dropzone'>
                        <input {...getInputProps()} />
                        <Subtitle1 className='text-center'>Arrastra aqui la imagen de tu mascota, o da click para seleccionarla</Subtitle1>
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
                    align-text: center;
                    padding: 42px;
                    border-width: 2px;
                    border-radius: 2px;
                    border-color: #AAAAAA;
                    border-style: dashed;
                    background-color: #E2E2E2;
                    color: #7C7C7C;
                    outline: none;
                }
                .container {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </>
  );
}

export default DropZoneWithPreview;