import React, { Component } from 'react';
import { Slider } from 'antd';
import Cropper from 'react-easy-crop'

export default class CoverCropper extends Component {

    state = {
        crop: { x: 0, y: 0 },
        zoom: 1,
        aspect: 4 / 3,
    }

    render() {
        return (
            <div>
                <div className="crop-container">
                    <Cropper
                      image={this.props.imageSrc}
                      crop={this.state.crop}
                      zoom={this.state.zoom}
                      aspect={this.state.aspect}
                      onCropChange={this.props.onCropChange}
                      onCropComplete={this.props.onCropComplete}
                      onZoomChange={this.props.onZoomChange}
                    />
                </div>
                <div className="controls">
                    <Slider
                      defaultValue={this.state.zoom}
                      min={1}
                      max={3}
                      step={0.1}
                      aria-labelledby="Zoom"
                      onChange={(zoom) => this.props.onZoomChange(zoom)}
                      classes={{ container: 'slider' }}
                    />
                </div>
            </div>
        );
    }
}