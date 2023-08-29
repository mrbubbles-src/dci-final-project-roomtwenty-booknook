const nodemailer = require("nodemailer");
const aws = require("aws-sdk");
const {
    SESClient,
    CloneReceiptRuleSetCommand,
} = require("@aws-sdk/client-ses");

aws.config.loadFromPath;
