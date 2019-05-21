import PropTypes from 'prop-types';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener("keydown", this.escFunction);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.escFunction);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.closeDialog();
        }
    }
    escFunction(event){
        if(event.keyCode === 27) {
            this.props.closeDialog();
        }
    }
    render (){
        const { open, title, children } = this.props;
        return (
            <>
                <div className='title' role='dialog'>
                    <div className='overlay' style={{ opacity: open ? 1 : 0, transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}></div>
                    <div className='dialogContainer' style={{ opacity: open ? 1 : 0, transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                        <div className='dialog' ref={this.setWrapperRef}>
                            <div className='dialogTitle'>
                                <h5>{title}</h5>
                            </div>
                            <div className='dialogBody'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .title {
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: ${open ? '1300' : '-1'};
                        position: fixed;
                        transition: z-index 226ms;
                    }
                    .overlay {
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: -1;
                        position: fixed;
                        touch-action: none;
                        background-color: rgba(0, 0, 0, 0.5);
                        -webkit-tap-highlight-color: transparent;
                    }
                    .dialogContainer {
                        height: 100%;
                        outline: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .dialog {
                        max-width: 600px;
                        flex: 0 1 auto;
                        max-height: calc(100% - 96px);
                        margin: 48px;
                        display: flex;
                        position: relative;
                        overflow-y: auto;
                        flex-direction: column;
                        box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
                        border-radius: 4px;
                        background-color: #fff;
                        transition: width 300ms ease-in-out, height 300ms ease-in-out;
                    }
                    @media (max-width: 768px) {
                        .dialog {
                            width: 100%;
                            margin: 0;
                            height: 100%;
                            max-width: 100%;
                            max-height: none;
                            border-radius: 0;
                        }
                    }
                    h5 {
                        font-family: 'Montserrat' sans-serif;
                        font-size: 24px;
                    }
                    .dialogTitle {
                        flex: 0 0 auto;
                        margin: 0;
                        padding: 24px 24px 20px;
                    }
                `}</style>
            </>
        );
    }
}

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired
};

export default Dialog;