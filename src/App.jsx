import { useMemo, useState } from "react";

const appSchema = {
  "type": "multi-screen-app",
  "title": "yt2",
  "entry": "home",
  "flow": {
    "home": "watch",
    "watch": "upload",
    "upload": "home"
  },
  "screens": {
    "home": {
      "type": "ecommerce",
      "title": "Home / Videos",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "200px",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "34px",
              "type": "banner",
              "title": "RapidTube",
              "subtitle": "Trending videos, creator channels, and fresh uploads.",
              "id": "30038f0d-87e6-462f-8132-6a19a43bee0d",
              "alignment": "left"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "start",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#DC2626",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "All",
                  "action": "none",
                  "targetScreen": "",
                  "id": "6dba65f3-e1f5-4c84-af27-900c4c09f42c"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Music",
                  "action": "none",
                  "targetScreen": "",
                  "id": "7879112c-f863-49fc-9bb0-b3cbb65cf7ec"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Gaming",
                  "action": "none",
                  "targetScreen": "",
                  "id": "77d02a0c-5ff5-4cb2-90a9-1d7570f812c8"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Tech",
                  "action": "none",
                  "targetScreen": "",
                  "id": "bfa0f146-4f54-44e7-aeb5-5d92f6155587"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Tutorials",
                  "action": "none",
                  "targetScreen": "",
                  "id": "3bb84953-1f2a-4e8a-8630-0e7a2c6b4111"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "42px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "10px 18px",
                  "fontSize": "14px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Podcasts",
                  "action": "none",
                  "targetScreen": "",
                  "id": "1e6bbda4-45ef-40a7-867c-459adaf8d6c7"
                }
              ],
              "id": "c52c8ad4-db3c-425f-9482-4a73c4607345"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "start",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 22px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "+ Upload New Video",
                  "action": "go-to-screen",
                  "targetScreen": "upload",
                  "id": "db68db88-0196-49bf-9561-6601cbeeb0a5"
                }
              ],
              "id": "f1400eac-9b3f-455d-bbab-331f6f693b51"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "divider",
              "thickness": 1,
              "color": "#334155",
              "id": "f1cc5ed7-318e-4451-95c0-8a8a454837fa"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Recommended Videos",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Creator Desk Setup Tour",
                  "price": "Creator Studio | 1.2M views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "e3225f12-8808-48be-929e-ae3365140364"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Street Food Night Market",
                  "price": "City Bites | 842K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "b71bc829-9d30-4b08-a013-75187d04cf0d"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Build a React App Fast",
                  "price": "Code Daily | 520K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "6123d9e0-9950-44a7-b3a0-8bca8f4f6344"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Lo-fi Focus Mix",
                  "price": "Sound Room | 3.4M views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "8a74adaf-19ad-4e21-bca0-5567845f9a50"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Tiny Home Walkthrough",
                  "price": "Modern Living | 690K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "99e29766-5f44-4d01-9be2-08bd3f330477"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Camera Gear Guide",
                  "price": "Frame Lab | 315K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "1fc978d9-ec9d-47ce-9784-5d8682251d7e"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Podcast Studio Setup",
                  "price": "Creator Studio | 210K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "0f43ca86-4f85-4850-ba72-17a3ab5f4e40"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Gaming Highlights Reel",
                  "price": "Level Up | 980K views",
                  "image": "",
                  "targetScreen": "watch",
                  "id": "be0a1006-cb48-4ec1-ab59-ac315d7dadc8"
                }
              ],
              "id": "8db4d460-b582-4cf9-840e-94d2eafcd1f7",
              "width": "100%"
            }
          ],
          "id": "d4542428-4828-47d6-a05b-138d9a933908",
          "width": "100%"
        }
      ]
    },
    "watch": {
      "type": "ecommerce",
      "title": "Watch Video",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "340px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "36px",
          "type": "banner",
          "title": "Now Playing",
          "subtitle": "Large video placeholder for the selected creator upload.",
          "id": "bc511d0c-efae-4438-959b-fcdb2ee2ad61"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "spacer",
          "height": 16,
          "id": "c576f115-723b-472d-a44a-63b4036a14cc"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "row",
          "gap": 44,
          "justify": "start",
          "align": "start",
          "wrap": false,
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "column",
              "width": "68%",
              "grow": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "auto",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "26px",
                  "type": "card",
                  "title": "Ultimate Creator Desk Setup",
                  "value": "1.2M views | Published today",
                  "targetScreen": "",
                  "id": "da8a4ff7-0c38-402e-959d-8c462596e9df"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "auto",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "26px",
                  "type": "card",
                  "title": "Description",
                  "value": "A polished static watch page with creator context, metadata, and video details.",
                  "targetScreen": "",
                  "id": "d8a8fea6-2282-4017-85b4-8db0be773455"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "row",
                  "gap": 12,
                  "justify": "start",
                  "align": "center",
                  "wrap": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#7C3AED",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Back to Videos",
                      "action": "go-to-screen",
                      "targetScreen": "home",
                      "id": "6ae814b7-af27-4b33-9624-4cc87e52268d"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#7C3AED",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Upload Your Video",
                      "action": "go-to-screen",
                      "targetScreen": "upload",
                      "id": "e367d8c6-aa1f-4a97-bdf9-01bd4e9b15d2"
                    }
                  ],
                  "id": "be112f4d-3e5a-4fca-bdf9-165c17b851b9"
                }
              ],
              "id": "4e5927a2-46f5-41a6-81ce-a9946c7b5cce",
              "gap": 24
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "column",
              "width": "32%",
              "grow": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "22px",
                  "type": "card",
                  "title": "Creator Studio",
                  "value": "1.1M subscribers",
                  "targetScreen": "",
                  "id": "92351056-ef83-42c4-b179-e90155a717f7"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "20px",
                  "type": "card",
                  "title": "Editing Workflow Tips",
                  "value": "Frame Lab | 188K views",
                  "targetScreen": "watch",
                  "id": "36c0e722-cf6b-4ff6-ae5a-8d377f4d511f"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "20px",
                  "type": "card",
                  "title": "Minimal Studio Tour",
                  "value": "Modern Living | 416K views",
                  "targetScreen": "watch",
                  "id": "b1142ba0-e0b6-4c80-8b95-972c0bcf3dfc"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "20px",
                  "type": "card",
                  "title": "Budget Microphones",
                  "value": "Sound Room | 270K views",
                  "targetScreen": "watch",
                  "id": "f870b6a8-a953-4d8d-a733-3f45cc4210f3"
                }
              ],
              "id": "8cbfcf35-7a69-4dba-9b15-1f61f9e750c2",
              "gap": 16
            }
          ],
          "id": "695bdd99-ed27-47b9-92ab-aa5c76a5b8ec"
        }
      ]
    },
    "upload": {
      "type": "auth",
      "title": "Upload Video",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "auto",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "24px",
          "type": "banner",
          "title": "Upload Video",
          "subtitle": "Prototype form only. No files are stored.",
          "id": "ea15b92c-f79c-4247-9e0e-0783740a4da5"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "input",
          "field": "videoTitle",
          "placeholder": "Video title",
          "inputType": "text",
          "id": "2750a78d-98fd-422c-bd2c-516aae7b9c55"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "input",
          "field": "description",
          "placeholder": "Short description",
          "inputType": "text",
          "id": "2ece93a3-4b25-489c-a0fe-de732b7fd253"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "input",
          "field": "category",
          "placeholder": "Category",
          "inputType": "text",
          "id": "69a9cff7-95f5-48a3-8a85-ae1700b531af"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "widthMode": "full",
          "maxWidth": "",
          "height": "46px",
          "backgroundColor": "#DC2626",
          "textColor": "#FFFFFF",
          "borderRadius": "12px",
          "padding": "12px 24px",
          "fontSize": "15px",
          "fontWeight": "600",
          "alignment": "left",
          "type": "button",
          "label": "Upload Video",
          "action": "none",
          "targetScreen": "",
          "id": "e58a8202-f4bd-4da3-98da-b774c4a7fb43"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "widthMode": "full",
          "maxWidth": "",
          "height": "46px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "12px",
          "padding": "12px 24px",
          "fontSize": "15px",
          "fontWeight": "600",
          "alignment": "left",
          "type": "button",
          "label": "Back to Videos",
          "action": "go-to-screen",
          "targetScreen": "home",
          "id": "1a5da9bf-e761-4e05-bc10-32b4ba3a9f3b"
        }
      ]
    }
  },
  "navigation": [],
  "theme": {
    "primaryColor": "#7c3aed",
    "secondaryColor": "#06b6d4",
    "backgroundColor": "#0f172a",
    "surfaceColor": "#1e293b",
    "textColor": "#ffffff",
    "borderRadius": "12px",
    "fontFamily": "Inter",
    "spacing": "normal"
  },
  "components": []
};

const supportedBlockTypes = new Set([
  "hero",
  "banner",
  "card",
  "product-card",
  "button",
  "input",
  "table",
  "chart",
  "container",
  "row",
  "column",
  "grid",
  "spacer",
  "divider",
  "features",
  "cta"
]);

function getScreenKeys(schema) {
  return Object.keys(schema.screens || {});
}

function getInitialScreen(schema) {
  const screenKeys = getScreenKeys(schema);
  if (schema.entry && schema.screens?.[schema.entry]) return schema.entry;
  return screenKeys[0] || "home";
}

function getText(value, fallback = "") {
  return value === undefined || value === null || value === "" ? fallback : value;
}

function toCssSize(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? value + "px" : value;
}

function getSurfaceStyle(block = {}) {
  return {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    margin: toCssSize(block.margin),
    height: toCssSize(block.height),
    maxWidth: block.maxWidth || undefined,
  };
}

function getLayoutStyle(block = {}) {
  return {
    ...getSurfaceStyle(block),
    "--gap": toCssSize(block.gap, "16px"),
  };
}

function getJustify(value) {
  if (value === "center") return "center";
  if (value === "end") return "flex-end";
  if (value === "between") return "space-between";
  return "flex-start";
}

function getAlign(value) {
  if (value === "start") return "flex-start";
  if (value === "end") return "flex-end";
  if (value === "stretch") return "stretch";
  return "center";
}

function getBlockTarget(block, currentScreen) {
  if (block.targetScreen && appSchema.screens?.[block.targetScreen]) {
    return block.targetScreen;
  }

  if (block.action === "next-screen") {
    const nextScreen = appSchema.flow?.[currentScreen];
    return nextScreen && appSchema.screens?.[nextScreen] ? nextScreen : null;
  }

  if (block.actions?.onClick?.type === "navigate") {
    const target = block.actions.onClick.target;
    return target && appSchema.screens?.[target] ? target : null;
  }

  return null;
}

function navigateTo(target, setCurrentScreen) {
  if (!target || !appSchema.screens?.[target]) return;
  setCurrentScreen(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RenderChildren({ blocks = [], currentScreen, setCurrentScreen }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => (
    <RenderBlock
      key={block.id || block.type + "-" + index}
      block={block}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
}

function HeroBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className={"hero hero-" + getText(block.variant, "default")} style={getSurfaceStyle(block)}>
      <div>
        <h1>{getText(block.title, "Hero Title")}</h1>
        <p>{getText(block.subtitle, "Hero subtitle")}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
            {getText(block.buttonLabel, "Get Started")}
          </button>
        </div>
      </div>
    </section>
  );
}

function BannerBlock({ block }) {
  return (
    <section className="banner" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Banner")}</h2>
      <p>{getText(block.subtitle, "Limited time offer")}</p>
    </section>
  );
}

function CardBlock({ block }) {
  return (
    <article className="card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Card title")}</h3>
      <p>{getText(block.value, "")}</p>
    </article>
  );
}

function ProductCardBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const metaParts = String(getText(block.price, "$99")).split("|").map((part) => part.trim()).filter(Boolean);
  const primaryMeta = metaParts[0] || "$99";
  const secondaryMeta = metaParts.slice(1).join(" | ");

  return (
    <article className="product-card" style={getSurfaceStyle(block)}>
      <div className="product-media">
        {block.image ? (
          <img src={block.image} alt={getText(block.name, "Product")} />
        ) : (
          <span>{String(primaryMeta).startsWith("$") ? "Product" : "Video"}</span>
        )}
      </div>
      <h3>{getText(block.name, "Product")}</h3>
      <div className="product-meta">
        <span>{primaryMeta}</span>
        {secondaryMeta ? <small>{secondaryMeta}</small> : null}
      </div>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {String(primaryMeta).startsWith("$") ? "View Product" : "Watch"}
      </button>
    </article>
  );
}

function ButtonBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const style = {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    height: toCssSize(block.height),
    fontSize: toCssSize(block.fontSize),
    fontWeight: block.fontWeight || undefined,
    width: block.widthMode === "full" ? "100%" : "auto",
    maxWidth: block.maxWidth || undefined,
  };

  return (
    <button className="button" type="button" style={style} onClick={() => navigateTo(target, setCurrentScreen)}>
      {getText(block.label, "Button")}
    </button>
  );
}

function InputBlock({ block }) {
  return (
    <input
      className="input"
      type={getText(block.inputType, "text")}
      placeholder={getText(block.placeholder, block.field || "Input")}
      aria-label={getText(block.placeholder, block.field || "Input")}
    />
  );
}

function TableBlock({ block }) {
  const rows = block.rows || [
    ["Customer", "Status", "Amount"],
    ["Alex Morgan", "Paid", "$129"],
    ["Sam Taylor", "Pending", "$89"],
  ];

  return (
    <section className="table-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Table")}</h3>
      <div className="table-scroll">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex}>{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChartBlock({ block }) {
  return (
    <section className="chart-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Chart")}</h3>
      <div className="chart-bars">
        {[45, 70, 56, 88, 64].map((height, index) => (
          <span key={index} style={{ height: height + "%" }} />
        ))}
      </div>
    </section>
  );
}

function ContainerBlock({ block, currentScreen, setCurrentScreen }) {
  return (
    <section className="layout-container" style={getLayoutStyle(block)}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function RowBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    justifyContent: getJustify(block.justify),
    alignItems: getAlign(block.align),
    flexWrap: block.wrap === false ? "nowrap" : "wrap",
  };

  return (
    <section className="layout-row" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function ColumnBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    flexBasis: block.width || "0",
    flexGrow: block.grow === false ? 0 : 1,
  };

  return (
    <section className="layout-column" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function GridBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    "--columns": Math.max(1, Number(block.columns || 3)),
  };

  return (
    <section className="grid-section" style={style}>
      {block.title ? <h2>{block.title}</h2> : null}
      <div className="layout-grid">
        <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </section>
  );
}

function SpacerBlock({ block }) {
  return <div style={{ height: toCssSize(block.height, "32px") }} />;
}

function DividerBlock({ block }) {
  return <hr style={{ borderColor: block.color || "#334155", borderWidth: toCssSize(block.thickness, "1px") }} />;
}

function FeaturesBlock({ block }) {
  const items = block.items?.length ? block.items : ["Fast", "Simple", "Responsive"];

  return (
    <section className="features" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Features")}</h2>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item}</h3>
            <p>{block.descriptions?.[index] || "A polished generated section."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className="cta" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Ready to start?")}</h2>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {getText(block.buttonLabel, "Get Started")}
      </button>
    </section>
  );
}

function UnsupportedBlock({ block }) {
  return (
    <section className="card">
      <h3>Unsupported block</h3>
      <p>{block.type}</p>
    </section>
  );
}

function RenderBlock({ block, currentScreen, setCurrentScreen }) {
  if (!block || !supportedBlockTypes.has(block.type)) {
    return <UnsupportedBlock block={block || { type: "unknown" }} />;
  }

  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "banner":
      return <BannerBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    case "product-card":
      return <ProductCardBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "button":
      return <ButtonBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "input":
      return <InputBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "chart":
      return <ChartBlock block={block} />;
    case "container":
      return <ContainerBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "row":
      return <RowBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "column":
      return <ColumnBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "grid":
      return <GridBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "divider":
      return <DividerBlock block={block} />;
    case "features":
      return <FeaturesBlock block={block} />;
    case "cta":
      return <CtaBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    default:
      return <UnsupportedBlock block={block} />;
  }
}

export default function App() {
  const screenKeys = useMemo(() => getScreenKeys(appSchema), []);
  const [currentScreen, setCurrentScreen] = useState(() => getInitialScreen(appSchema));
  const screen = appSchema.screens?.[currentScreen] || appSchema.screens?.[screenKeys[0]] || {
    title: "Untitled Screen",
    blocks: [],
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Exported RAPID App</p>
          <h1>{getText(appSchema.title, "RAPID App")}</h1>
        </div>
        <nav aria-label="Screens">
          {screenKeys.map((screenKey) => (
            <button
              key={screenKey}
              type="button"
              className={screenKey === currentScreen ? "active" : ""}
              onClick={() => navigateTo(screenKey, setCurrentScreen)}
            >
              {getText(appSchema.screens[screenKey]?.title, screenKey)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="screen-title">
          <p>Screen</p>
          <h2>{getText(screen.title, currentScreen)}</h2>
        </div>
        <RenderChildren blocks={screen.blocks} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </main>
    </div>
  );
}
