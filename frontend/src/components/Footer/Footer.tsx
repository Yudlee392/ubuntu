import React, { FC, ReactElement } from "react";
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

import "./Footer.scss";

const Footer: FC = (): ReactElement => {
    return (
        <div className={"footer-wrapper"}>
            <Row >
                <Col span={12}>
                    <Typography.Title level={3}>Perfume</Typography.Title>
                    <Typography.Text>(+84) 9862434543</Typography.Text>
                    <Typography.Text className={"mt-12"}>Open 24/24</Typography.Text>
                </Col>
                <Col span={12} >
                    <div className={"footer-wrapper-social"}>
                        <Typography.Title level={3}>Social networks</Typography.Title>
                        <a href="/">
                            <LinkedinOutlined />
                        </a>
                        <a href="fb.com/yudlee02">
                            <FacebookOutlined />
                        </a>
                        <a href="#">
                            <TwitterOutlined />
                        </a>
                    </div>
                </Col>
            </Row>
            <Row className={"footer-wrapper-copyright"}>
                <Typography.Text>© Copy right Yudlee</Typography.Text>
            </Row>
        </div>
    );
};

export default Footer;