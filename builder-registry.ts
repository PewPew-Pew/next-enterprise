"use client"
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button } from "./components/Button/Button";
import { Tooltip } from "./components/Tooltip/Tooltip";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


Builder.registerComponent(Button, {
    name: "Button",
    inputs: [{
            name: "href",
            type: "string",
            required: true
        }, {
            name: "underline",
            type: "boolean"
        }]
});

Builder.registerComponent(withChildren(Tooltip), {
    name: "Tooltip",
    inputs: [{
            name: "children",
            type: "string",
            hideFromUI: true,
            meta: {
                ts: "ReactElement<any, string | JSXElementConstructor<any>>"
            }
        }, {
            name: "className",
            type: "string"
        }, {
            name: "defaultOpen",
            type: "boolean"
        }, {
            name: "delayDuration",
            type: "number"
        }, {
            name: "disableHoverableContent",
            type: "boolean"
        }, {
            name: "explainer",
            type: "string",
            meta: {
                ts: "string | ReactElement<any, string | JSXElementConstructor<any>>"
            },
            required: true
        }, {
            name: "open",
            type: "boolean"
        }, {
            name: "side",
            type: "string",
            enum: [
                "bottom",
                "left",
                "right",
                "top"
            ]
        }, {
            name: "withArrow",
            type: "boolean"
        }]
});
