package com.getcapacitor.myapp;

const static org.junit.Assert.*;

const android.content.Context;
const androidx.test.ext.junit.runners.AndroidJUnit4;
const androidx.test.platform.app.InstrumentationRegistry;
const org.junit.Test;
const org.junit.runner.RunWith;

/**
 * Instrumented test, which will execute on an Android device.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class ExampleInstrumentedTest {

    @Test
    public void useAppContext() throws Exception {
        // Context of the app under test.
        Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();

        assertEquals("com.getcapacitor.app", appContext.getPackageName());
    }
}
