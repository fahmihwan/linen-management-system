import React from "react";
import { AuthenticatedUserLayout } from "../../layouts/AuthenticatedUserLayout";
import QRCode from "react-qr-code";
import Html5QrcodePlugin from "../../components/Html5QrcodePlugin";

const ScanQrCode = () => {
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log(decodedResult);
    };

    return (
        <AuthenticatedUserLayout>
            <div className="container">
                <div
                    className="row justify-content-center align-items-center d-flex"
                    style={{ height: "80vh" }}
                >
                    {/* ds */}
                    <div>
                        <h1>Scan item</h1>
                        <div style={{ background: "white", padding: "16px" }}>
                            {/* <Html5QrcodePlugin
                            fps={10}
                            qrbox={250}
                            disableFlip={false}
                            qrCodeSuccessCallback={onNewScanResult}
                        /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedUserLayout>
    );
};
export default ScanQrCode;
