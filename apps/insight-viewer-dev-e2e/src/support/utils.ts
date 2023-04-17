import type { Annotation, Measurement, Point } from '@lunit/insight-viewer'

export function setup(): void {
  // ResizeObserver loop limit exceeded
  // https://github.com/cypress-io/cypress/issues/8418
  const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
  Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
      return false
    }
    return false
  })
}

type DomElementExistState = 'not.exist' | 'exist'

export function deleteAndCheckAnnotationOrMeasurement(
  element: Annotation | Measurement,
  domElementState: DomElementExistState = 'exist'
): void {
  const targetDataAttr = `[data-cy-id="${element.id}"]`

  cy.get(targetDataAttr).click({ force: true })
  cy.get(targetDataAttr).should(domElementState)
}

export function deleteAndCheckMultiAnnotationOrMeasurement(
  elements: Annotation[] | Measurement[],
  domElementState: DomElementExistState = 'exist'
): void {
  elements.forEach((element) => deleteAndCheckAnnotationOrMeasurement(element, domElementState))
}

export function drawAnnotation(element: Annotation): void {
  cy.get('.cornerstone-canvas-wrapper').as('canvas')

  if (element.type === 'circle') {
    return undefined
  }

  if (element.type === 'freeLine' || element.type === 'polygon') {
    element.points.forEach(([x, y], i) => {
      if (i === 0) {
        cy.get('@canvas').trigger('mousedown', {
          x,
          y,
          button: 0,
        })
      } else if (i === element.points.length - 1) {
        cy.get('@canvas').trigger('mouseup', { button: 0 })
      } else {
        cy.get('@canvas').trigger('mousemove', {
          x,
          y,
          button: 0,
        })
      }
    })
    return undefined
  }

  // annotation mode is line or text

  const [startPoint, endPoint] = element.points

  cy.get('@canvas')
    .trigger('mousedown', { x: startPoint[0], y: startPoint[1], button: 0 })
    .trigger('mousemove', { x: endPoint[0], y: endPoint[1], button: 0 })
    .trigger('mouseup', { button: 0 })

  return undefined
}

export function drawAnnotations(elements: Annotation[]): void {
  elements.forEach(drawAnnotation)
}

export function moveAnnotation(annotation: Annotation, distance: number): void {
  if (annotation.type === 'circle') {
    return undefined
  }

  const targetDataAttr = `[data-cy-id="${annotation.id}"]`
  const targetDrawingAttr = '[data-cy-annotation]'
  const startPoint = annotation.points[0]

  cy.get(targetDataAttr).click({ force: true })

  cy.get(targetDrawingAttr).trigger('mousedown', {
    force: true,
    pageX: startPoint[0] + 5,
    pageY: startPoint[1] + 5,
  })

  for (let i = 0; i < distance; i += 25) {
    cy.get(targetDrawingAttr).trigger('mousemove', {
      force: true,
      pageX: startPoint[0] + i,
      pageY: startPoint[1] + i,
      button: 0,
    })
  }

  cy.get(targetDrawingAttr).trigger('mouseup', { force: true, button: 0 })

  // edit mode disabled
  cy.get('.cornerstone-canvas-wrapper').click()

  return undefined
}

export const editAnnotation = (editTargetPoint: Point, distance: number): void => {
  cy.get('.cornerstone-canvas-wrapper').as('canvas')
  const [x, y] = editTargetPoint

  cy.get('@canvas')
    .trigger('mousedown', { x, y, button: 0 })
    .trigger('mousemove', { x: x + distance, y: y + distance, button: 0 })
    .trigger('mouseup', { button: 0 })

  cy.get('@canvas').click()
}

export const drawMeasurement = (measurement: Measurement): void => {
  cy.get('.cornerstone-canvas-wrapper').as('canvas')

  if (measurement.type === 'ruler') {
    const [startPoint, endPoint] = measurement.startAndEndPoint

    cy.get('@canvas')
      .trigger('mousedown', { x: startPoint[0], y: startPoint[1], button: 0 })
      .trigger('mousemove', { x: endPoint[0], y: endPoint[1], button: 0 })
      .trigger('mouseup', { button: 0 })
  }
}

export const drawMeasurements = (measurements: Measurement[]): void => {
  measurements.forEach(drawMeasurement)
}

export const moveMeasurement = (measurement: Measurement, distance: number): void => {
  const targetDataAttr = `[data-cy-id="${measurement.id}"]`
  const targetDrawingAttr = '[data-cy-move]'
  const startPoint = measurement.type === 'area' ? measurement.centerPoint : measurement.startAndEndPoint[0]

  cy.get(targetDataAttr).click({ force: true })

  cy.get(targetDrawingAttr).trigger('mousedown', {
    x: startPoint[0] + 5,
    pageY: startPoint[1] + 5,
    button: 0,
  })

  for (let i = 0; i < distance; i += 25) {
    cy.get(targetDrawingAttr).trigger('mousemove', {
      pageX: startPoint[0] + i,
      pageY: startPoint[1] + i,
      button: 0,
    })
  }

  cy.get(targetDrawingAttr).trigger('mouseup', { force: true, button: 0 })

  // edit mode disabled
  cy.get('.cornerstone-canvas-wrapper').click()

  return undefined
}

export const editPoint = (editTargetPoint: Point, distance: number): void => {
  cy.get('.cornerstone-canvas-wrapper').as('canvas')
  const [x, y] = editTargetPoint

  cy.get('@canvas')
    .trigger('mousedown', { x, y, button: 0 })
    .trigger('mousemove', { x: x + distance, y: y + distance, button: 0 })
    .trigger('mouseup', { button: 0 })

  cy.get('@canvas').click()
}
