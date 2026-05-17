"use client"

import { useState } from "react"

const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  athlete: 1.9,
}

function calculatePlan(formData) {
  const weight = Number(formData.weight) || 0
  const height = Number(formData.height) || 170
  const age = Number(formData.age) || 25

  const bmr =
    formData.gender === "female"
      ? 10 * weight + 6.25 * height - 5 * age - 161
      : 10 * weight + 6.25 * height - 5 * age + 5

  const maintenanceCalories = bmr * (ACTIVITY_MULTIPLIERS[formData.activityLevel] || 1.55)

  const calories =
    formData.weightDirection === "lose"
      ? Math.round(maintenanceCalories - 300)
      : formData.weightDirection === "gain"
        ? Math.round(maintenanceCalories + 300)
        : Math.round(maintenanceCalories)

  const protein =
    formData.weightDirection === "gain"
      ? Math.round(weight * 1.8)
      : formData.weightDirection === "lose"
        ? Math.round(weight * 1.6)
        : Math.round(weight * 1.4)

  const mealType =
    formData.weightDirection === "lose"
      ? "Fat Loss Meal Plan"
      : formData.weightDirection === "gain"
        ? "Muscle Gain Meal Plan"
        : "Balanced Lifestyle Plan"

  return { calories, protein, mealType }
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">{eyebrow}</p>
      <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{subtitle}</p>
    </div>
  )
}

function IntroSection({ onStart }) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_42%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <nav className="mb-20 flex items-center justify-between rounded-3xl border border-zinc-800 bg-black/60 px-6 py-4 text-left backdrop-blur-md">
          <div>
            <p className="text-2xl font-black tracking-tight">ABS PURSUIT</p>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-green-400">Nutrition</p>
          </div>
          <button onClick={onStart} className="rounded-2xl bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400">
            Build Your Plan
          </button>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          Personalized Meal Subscriptions For India
        </p>

        <h1 className="mx-auto mt-8 max-w-6xl text-5xl font-black leading-tight md:text-7xl xl:text-8xl">
          Eat For Your
          <span className="text-green-400"> Dream Physique.</span>
          <br />
          Not Just Hunger.
        </h1>

        <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-zinc-300 md:text-2xl">
          Most people spend thousands every month on food, but still miss protein, eat oily meals, and lose time cooking. We design your meals around your calories, protein, goal, and lifestyle — then deliver them to your doorstep.
        </p>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-4">
          {[
            ["Protein Gap", "Many Indian diets are carb-heavy and low in protein."],
            ["No Cooking", "Save daily time spent shopping, cooking, and cleaning."],
            ["Goal-Based", "Calories and protein matched to your fitness target."],
            ["Doorstep", "Fresh meals delivered weekly or monthly."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-3xl border border-zinc-800 bg-black/70 p-6 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400">{title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-300">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 text-left md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-400">Problem</p>
            <h3 className="mt-4 text-3xl font-bold">Random Food</h3>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Outside food may be tasty, but it is often oily, calorie-heavy, and low in useful protein.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-400">Cost</p>
            <h3 className="mt-4 text-3xl font-bold">Hidden Spending</h3>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Groceries, gas, snacks, food delivery, and cooking time add up quickly without helping your fitness goal.
            </p>
          </div>

          <div className="rounded-3xl bg-green-500 p-8 text-black shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide">Solution</p>
            <h3 className="mt-4 text-3xl font-bold">Planned Nutrition</h3>
            <p className="mt-5 text-lg leading-relaxed opacity-90">
              We reduce waste through subscriptions and planned delivery routes, helping us offer affordable meals while still building a profitable business.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-3xl bg-green-500 p-8 text-black shadow-2xl md:p-10">
          <h2 className="text-4xl font-black leading-tight md:text-5xl">Follow The Plan. See The Results.</h2>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed opacity-90">
            We won’t sell random food. We help customers eat consistently according to their body goal. Results depend on consistency, workouts, sleep, and personal health conditions.
          </p>
          <button onClick={onStart} className="mt-8 rounded-2xl bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-900">
            Start Building My Plan
          </button>
        </div>
      </div>
    </section>
  )
}

function PlanBuilderSection() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    targetWeight: "",
    targetTimeline: "",
    workoutDays: "",
    activityLevel: "",
    goal: "",
    weightDirection: "",
    foodPreference: "",
    mealsPerDay: "3",
  })

  const [showResults, setShowResults] = useState(false)
  const [showMealPlans, setShowMealPlans] = useState(false)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    setShowResults(false)
    setShowMealPlans(false)
  }

  const isFormComplete = Boolean(
    formData.age &&
      formData.gender &&
      formData.height &&
      formData.weight &&
      formData.targetWeight &&
      formData.targetTimeline &&
      formData.workoutDays &&
      formData.activityLevel &&
      formData.goal &&
      formData.weightDirection &&
      formData.foodPreference,
  )

  const plan = calculatePlan(formData)
  const mealsPerDay = Number(formData.mealsPerDay) || 3
  const pricePerMeal = formData.weightDirection === "gain" ? 299 : 259
  const weeklyMeals = mealsPerDay * 6
  const monthlyMeals = mealsPerDay * 26

  const currentWeight = Number(formData.weight) || 0
  const targetWeight = Number(formData.targetWeight) || 0
  const weightDifference = Math.abs(currentWeight - targetWeight)

  const timelineMonths = {
    "1month": 1,
    "3months": 3,
    "6months": 6,
    "12months": 12,
  }

  const selectedMonths = timelineMonths[formData.targetTimeline] || 3
  const weightChangePerMonth = selectedMonths ? (weightDifference / selectedMonths).toFixed(1) : 0

  const isUnrealisticGoal =
    formData.weightDirection === "lose"
      ? weightChangePerMonth > 4
      : weightChangePerMonth > 3

  const mealBreakdown = {
    breakfast: {
      calories: Math.round(plan.calories * 0.25),
      protein: Math.round(plan.protein * 0.25),
      items: formData.weightDirection === "gain" ? "Eggs, oats, yogurt, fruit" : "Egg whites, oats, yogurt, fruit",
    },
    lunch: {
      calories: Math.round(plan.calories * 0.4),
      protein: Math.round(plan.protein * 0.4),
      items: formData.foodPreference === "veg" ? "Paneer/tofu rice bowl with vegetables" : "Chicken rice bowl with vegetables",
    },
    dinner: {
      calories: Math.round(plan.calories * 0.35),
      protein: Math.round(plan.protein * 0.35),
      items: formData.foodPreference === "veg" ? "Paneer/tofu, rice, vegetables" : "Lean chicken, rice, vegetables",
    },
  }

  return (
    <section id="builder" className="min-h-screen bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Step 2"
          title="Build Your Personalized Plan"
          subtitle="Customer enters body details. We calculate estimated calories, protein target, meal split, and weekly/monthly pricing."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl md:p-10">
            <h3 className="text-3xl font-bold">Customer Details</h3>
            <p className="mt-3 text-zinc-400">These details help create a more accurate plan.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={["male", "female"]} />
              <InputField label="Age" name="age" value={formData.age} onChange={handleChange} placeholder="Example: 25" />
              <InputField label="Height" name="height" value={formData.height} onChange={handleChange} placeholder="Height in cm" />
              <InputField label="Weight" name="weight" value={formData.weight} onChange={handleChange} placeholder="Current weight in kg" />
              <InputField label="Target Weight" name="targetWeight" value={formData.targetWeight} onChange={handleChange} placeholder="Target weight in kg" />
              <SelectField label="Workout Days" name="workoutDays" value={formData.workoutDays} onChange={handleChange} options={["0-1", "2-3", "4-5", "6+"]} />
              <SelectField label="Activity Level" name="activityLevel" value={formData.activityLevel} onChange={handleChange} options={["sedentary", "light", "moderate", "active", "athlete"]} />
              <SelectField label="Goal" name="goal" value={formData.goal} onChange={handleChange} options={["muscle", "fatloss", "maintain", "performance"]} />
              <SelectField label="Food Preference" name="foodPreference" value={formData.foodPreference} onChange={handleChange} options={["nonveg", "veg", "eggetarian"]} />
              <SelectField
                label="Target Timeline"
                name="targetTimeline"
                value={formData.targetTimeline}
                onChange={handleChange}
                options={["1month", "3months", "6months", "12months"]}
              />

              <SelectField label="Meals Per Day" name="mealsPerDay" value={formData.mealsPerDay} onChange={handleChange} options={["1", "2", "3"]} />

              <div className="md:col-span-2">
                <label className="text-sm text-zinc-400">Goal Direction</label>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  {[
                    ["lose", "Lose Weight / Fat"],
                    ["gain", "Gain Weight / Muscle"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, weightDirection: value })
                        setShowResults(false)
                        setShowMealPlans(false)
                      }}
                      className={`rounded-2xl border px-5 py-4 font-semibold transition ${
                        formData.weightDirection === value
                          ? "border-green-500 bg-green-500 text-black"
                          : "border-zinc-700 bg-black text-white hover:border-green-400"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowResults(true)}
              className="mt-8 w-full rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-green-400"
            >
              Show Nutrition Targets
            </button>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-10">
            <h3 className="text-3xl font-bold">How We Use This</h3>
            <ul className="mt-8 space-y-5 text-zinc-300">
              <li>✓ Estimate daily calorie needs</li>
              <li>✓ Calculate daily protein target</li>
              <li>✓ Suggest breakfast, lunch, dinner split</li>
              <li>✓ Show weekly or monthly subscription pricing</li>
              <li>✓ Match food preference: veg, egg, or non-veg</li>
            </ul>
            <p className="mt-8 rounded-2xl border border-zinc-800 bg-black p-5 text-sm leading-relaxed text-zinc-400">
              This is an estimate, not medical advice. For medical conditions, customers should consult a certified dietitian.
            </p>
          </div>
        </div>

        {showResults && isFormComplete && (
          <div className="mt-10 rounded-3xl bg-green-500 p-6 text-black md:p-10">
            <p className="font-semibold uppercase tracking-wide">Your Estimated Targets</p>
            <h3 className="mt-3 text-4xl font-black">{plan.mealType}</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-black p-6 text-white">
                <p className="text-zinc-400">Calories</p>
                <h4 className="mt-2 text-5xl font-black">{plan.calories}</h4>
                <p className="mt-2 text-zinc-400">kcal/day</p>
              </div>
              <div className="rounded-3xl bg-black p-6 text-white">
                <p className="text-zinc-400">Protein</p>
                <h4 className="mt-2 text-5xl font-black">{plan.protein}g</h4>
                <p className="mt-2 text-zinc-400">per day</p>
              </div>
            </div>
            {isUnrealisticGoal && (
              <div className="mt-8 rounded-3xl border border-red-500 bg-red-500/10 p-6 text-left">
                <p className="text-sm font-bold uppercase tracking-wide text-red-400">Unrealistic Goal Detected</p>
                <h4 className="mt-3 text-2xl font-bold text-white">
                  Your selected goal may not be healthy or practically achievable.
                </h4>
                <p className="mt-4 leading-relaxed text-zinc-300">
                  Based on your current weight, target weight, and timeline, you are trying to change approximately
                  <span className="font-bold text-white"> {weightChangePerMonth} kg per month.</span>
                </p>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Healthy fat loss is usually around 2–4 kg per month and healthy muscle gain is slower. We recommend increasing your timeline for safer and more sustainable results.
                </p>
              </div>
            )}

            {!isUnrealisticGoal && (
              <div className="mt-8 rounded-3xl border border-green-500 bg-green-500/10 p-6 text-left">
                <p className="text-sm font-bold uppercase tracking-wide text-green-400">Healthy Goal Range</p>
                <h4 className="mt-3 text-2xl font-bold text-white">
                  Your goal looks realistic and achievable.
                </h4>
                <p className="mt-4 leading-relaxed text-zinc-300">
                  You are targeting around
                  <span className="font-bold text-white"> {weightChangePerMonth} kg per month</span>, which is within a healthier transformation range.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowMealPlans(true)}
              className="mt-8 rounded-2xl bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-900"
            >
              Continue To Meal & Pricing
            </button>
          </div>
        )}

        {showMealPlans && isFormComplete && (
          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-10">
            <SectionHeader
              eyebrow="Plan Output"
              title="Meals & Pricing"
              subtitle="This section can be changed anytime based on your real menu and price per meal."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Breakfast", mealBreakdown.breakfast],
                ["Lunch", mealBreakdown.lunch],
                ["Dinner", mealBreakdown.dinner],
              ].map(([mealName, meal]) => (
                <div key={mealName} className="rounded-3xl border border-zinc-800 bg-black p-6">
                  <p className="font-semibold text-green-400">{mealName}</p>
                  <h4 className="mt-3 text-3xl font-bold">{meal.calories} kcal</h4>
                  <p className="mt-2 text-zinc-400">{meal.protein}g protein</p>
                  <p className="mt-5 leading-relaxed text-zinc-300">{meal.items}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-zinc-800 bg-black p-8">
                <p className="text-sm uppercase tracking-wide text-zinc-400">Weekly Plan</p>
                <h3 className="mt-4 text-5xl font-black text-green-400">₹{weeklyMeals * pricePerMeal}</h3>
                <p className="mt-3 text-zinc-300">{weeklyMeals} meals/week at ₹{pricePerMeal} per meal.</p>

                <div className="mt-8 space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
                  <h4 className="text-2xl font-bold">Payment Options</h4>

                  <div className="rounded-2xl border border-zinc-700 bg-black p-5">
                    <p className="text-sm uppercase tracking-wide text-zinc-400">UPI Payment</p>
                    <p className="mt-3 text-2xl font-bold text-green-400">abspursuit@upi</p>
                    <p className="mt-2 text-zinc-400">Pay directly using any UPI app.</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-700 bg-black p-5">
                    <p className="text-sm uppercase tracking-wide text-zinc-400">Card Payment</p>
                    <button className="mt-3 w-full rounded-2xl bg-green-500 px-6 py-4 font-bold text-black transition hover:bg-green-400">
                      Proceed To Card Payment
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-green-500 p-8 text-black shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-wide">Monthly Plan</p>
                <h3 className="mt-4 text-5xl font-black">₹{monthlyMeals * pricePerMeal}</h3>
                <p className="mt-3 opacity-80">{monthlyMeals} meals/month at ₹{pricePerMeal} per meal.</p>

                <div className="mt-8 space-y-4 rounded-3xl border border-black/20 bg-black/10 p-6 backdrop-blur-sm">
                  <h4 className="text-2xl font-bold">Payment Options</h4>

                  <div className="rounded-2xl border border-black/20 bg-black/10 p-5">
                    <p className="text-sm uppercase tracking-wide opacity-70">UPI Payment</p>
                    <p className="mt-3 text-2xl font-black">abspursuit@upi</p>
                    <p className="mt-2 opacity-80">Instant UPI payment support.</p>
                  </div>

                  <div className="rounded-2xl border border-black/20 bg-black/10 p-5">
                    <p className="text-sm uppercase tracking-wide opacity-70">Card Payment</p>
                    <button className="mt-3 w-full rounded-2xl bg-black px-6 py-4 font-bold text-white transition hover:bg-zinc-900">
                      Proceed To Card Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function InputField({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-sm text-zinc-400">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="number"
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4 outline-none focus:border-green-400"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="text-sm text-zinc-400">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4 capitalize outline-none focus:border-green-400"
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function ProfessionalServicesSection() {
  return (
    <section className="min-h-screen bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Step 3"
          title="Professional Support Add-ons"
          subtitle="Meal subscription is the core product. Trainer and dietitian services are optional paid add-ons for customers who want expert guidance."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-black p-8 shadow-xl">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-green-500 bg-green-500/10 text-4xl">🏋️</div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-400">Add-on Service</p>
            <h3 className="mt-4 text-4xl font-bold">Licensed Fitness Coaching</h3>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Customers can work with certified trainers for workout plans, form correction, progress tracking, and accountability.
            </p>
            <div className="mt-8 rounded-3xl bg-zinc-950 p-6">
              <p className="text-zinc-400">Starting From</p>
              <h4 className="mt-2 text-4xl font-black text-green-400">₹1,999</h4>
              <p className="mt-2 text-zinc-400">per month, optional add-on</p>
            </div>
            <button className="mt-8 rounded-2xl bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400">
              Explore Coaching
            </button>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-black p-8 shadow-xl">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-green-500 bg-green-500/10 text-4xl">🥗</div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-400">Add-on Service</p>
            <h3 className="mt-4 text-4xl font-bold">Speak With A Dietitian</h3>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Customers can book certified dietitian consultations for personal health questions, medical restrictions, and advanced diet customization.
            </p>
            <div className="mt-8 rounded-3xl bg-zinc-950 p-6">
              <p className="text-zinc-400">Starting From</p>
              <h4 className="mt-2 text-4xl font-black text-green-400">₹799</h4>
              <p className="mt-2 text-zinc-400">per consultation, optional add-on</p>
            </div>
            <button className="mt-8 rounded-2xl bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400">
              Book Consultation
            </button>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-green-500 p-8 text-center text-black shadow-2xl md:p-10">
          <h3 className="text-4xl font-black">Meals First. Experts When Needed.</h3>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed opacity-90">
            This keeps the base meal plan affordable while giving serious customers access to professional fitness and nutrition support.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function ProteinMealLanding() {
  const scrollToBuilder = () => {
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <IntroSection onStart={scrollToBuilder} />
      <PlanBuilderSection />
      <ProfessionalServicesSection />
    </div>
  )
}
