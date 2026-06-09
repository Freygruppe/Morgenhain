# Morgenhain Image Prompts

The current environment did not expose the built-in image generation tool and no `OPENAI_API_KEY` was available for the fallback `gpt-image-2` CLI route. The site therefore uses original local raster placeholders in `public/assets/` for now.

When image generation is available, use these `gpt-image-2` prompts and replace the matching PNG files:

## `public/assets/morgenhain-hero.png`

Use case: photorealistic-natural  
Asset type: website hero image for a German Baugruppe  
Primary request: soft architectural visualization of a sustainable courtyard housing group in Freiburg, warm timber hybrid architecture, generous greenery, calm urban edge, no city plan  
Style/medium: editorial architectural photography / visualization, high-end architecture office presentation  
Composition/framing: wide vertical-friendly hero crop, building and greenery visible, enough calm negative space, no readable signage  
Lighting/mood: morning light, optimistic, quiet, civic and refined  
Color palette: warm timber, mineral light plaster, muted greens, natural stone, soft sky  
Constraints: no logos, no text, no watermarks, no specific Dietenbach plan or map

## `public/assets/morgenhain-courtyard.png`

Use case: photorealistic-natural  
Asset type: project page image  
Primary request: calm shared garden scene for a German Baugruppe, ecological planting, rain garden, timber balconies, residents only implied and not identifiable  
Style/medium: realistic architectural visualization  
Composition/framing: courtyard perspective, planted foreground, human scale, comfortable open space  
Lighting/mood: soft late afternoon, welcoming and sustainable  
Constraints: no logos, no text, no recognizable private persons, no city planning diagram

## `public/assets/morgenhain-material.png`

Use case: product-mockup  
Asset type: contact and material mood image  
Primary request: minimal material study for sustainable urban housing, timber, mineral plaster, plants, daylight, architectural samples on a studio table  
Style/medium: refined architectural still life photography  
Composition/framing: close but airy, tactile surfaces, balanced layout  
Lighting/mood: soft daylight, calm, precise, professional  
Constraints: no text, no labels, no logos, no watermark
