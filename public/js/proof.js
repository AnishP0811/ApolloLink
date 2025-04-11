document.addEventListener("DOMContentLoaded", () => {
  class AnimatedNumber {
    constructor(element, targetValue, duration = 2000) {
      this.element = element;
      this.targetValue = parseInt(
        targetValue.replace("+", "").replace(",", "")
      );
      this.duration = duration;
      this.startTime = null;
      this.animate = this.animate.bind(this);
      this.startAnimation();
    }

    easeOutQuad(t) {
      return t * (2 - t);
    }

    formatNumber(value) {
      return value.toLocaleString() + "+";
    }

    animate(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      const elapsed = timestamp - this.startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      const easedProgress = this.easeOutQuad(progress);
      const currentValue = Math.floor(easedProgress * this.targetValue);

      this.element.textContent = this.formatNumber(currentValue);

      if (progress < 1) {
        requestAnimationFrame(this.animate);
      } else {
        this.element.textContent = this.formatNumber(this.targetValue);
      }
    }

    startAnimation() {
      requestAnimationFrame(this.animate);
    }
  }

  document.querySelectorAll(".animated-number").forEach((element) => {
    new AnimatedNumber(element, element.getAttribute("data-value"));
  });
});
