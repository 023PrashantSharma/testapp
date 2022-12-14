/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_identity_pool_id": "ap-south-1:00e596cc-d73e-4602-b419-d5e98714d177",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_CnTwwinsH",
    "aws_user_pools_web_client_id": "78abdd9rdvvfs6o4980dj880v5",
    "oauth": {
        "domain": "test-app-dev.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://main.d1ujt2aw85lu26.amplifyapp.com/",
        "redirectSignOut": "https://main.d1ujt2aw85lu26.amplifyapp.com/",
        "responseType": "token"
    },
    "federationTarget": "COGNITO_USER_AND_IDENTITY_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "FACEBOOK",
        "GOOGLE",
        "AMAZON"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_cloud_logic_custom": [
        {
            "name": "apida503079",
            "endpoint": "https://oqz72it281.execute-api.ap-south-1.amazonaws.com/dev",
            "region": "ap-south-1"
        }
    ]
};


export default awsmobile;
